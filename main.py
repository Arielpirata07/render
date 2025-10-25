from flask import Flask, render_template, jsonify, flash, redirect, request, g, url_for
from config import config
import os
from models.Model_User import ModelUser
from models.entities.User import User
from forms import SignupForm, LoginForm, ContactForm
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
import sqlite3
from email_validator import validate_email, EmailNotValidError
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Cargar configuración según APP_ENV
app_env = os.getenv('APP_ENV', 'development')
app.config.from_object(config.get(app_env, config['development']))

# Configurar SECRET_KEY desde variable de entorno
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-replace-in-production')

# Configurar DATABASE si está definida en .env
if os.getenv('DATABASE'):
    app.config['DATABASE'] = os.getenv('DATABASE')

login_manager = LoginManager(app)

def init_db():
    db = get_db()
    with app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

def get_db():
    if 'db' not in g:
        # Crea conexión y fila como diccionario
        g.db = sqlite3.connect(app.config['DATABASE'], detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(error):
    db = g.pop('db', None)
    if db is not None:
        db.close()
    
@app.route('/', methods=['GET', 'POST'])
def index():
    form = ContactForm()
    if form.validate_on_submit():
        name = form.name.data
        phone = form.phone.data
        email = validate_email(form.email.data).email
        message = form.message.data
        db = get_db()
        cursor = db.cursor()
        cursor.execute("INSERT INTO CONTACTS (name, phone, email, message) VALUES (?,?,?,?)", (name, phone, email, message))
        db.commit()
        flash('Message sent successfully')
        return render_template('index.html', form=form)
    return render_template('index.html', form=form)

@app.route("/demo")
def demo():
    return render_template("demo.html")

@app.route("/login",methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        db = get_db()
        email = request.form['email']
        password = request.form['password']
        logged_user, status = ModelUser.login(db, email, password)
        if status == 'OK' and logged_user is not None:
            login_user(logged_user)
            return redirect(url_for('index'))
        elif status == 'INVALID_PASSWORD':
            flash('Invalid Password')
        else:
            flash('User not found')
        return render_template("login.html", form = form)
    else:
        return render_template("login.html", form = form)

@app.route("/register", methods=['GET','POST'])
def register():
    form = SignupForm()
    if form.validate_on_submit():
        username = form.name.data +"_"+ form.last_name.data
        email = validate_email(form.email.data).email
        password = generate_password_hash(form.password.data)
        print("contraseña",password)
        next = request.args.get('next')
        if next:
            return redirect(next)
        db = get_db()
        cursor = db.cursor()
        # check for existing email to avoid UNIQUE constraint failure
        cursor.execute("SELECT id FROM USERS WHERE email = ?", (email,))
        existing = cursor.fetchone()
        if existing is not None:
            flash('An account with that email already exists.')
            return render_template("register.html", form=form)
        try:
            cursor.execute("INSERT INTO USERS (username, email, password, is_admin) VALUES (?,?,?,?)", (username, email, password, False))
            db.commit()
        except sqlite3.IntegrityError:
            # in case of race condition or constraint violation
            flash('An account with that email already exists.')
            return render_template("register.html", form=form)
        flash('User registered successfully')
        return redirect(url_for('index'))
    return render_template("register.html", form = form)

@app.route("/recuperar")
def recuperar():
    return render_template("recuperar.html")

@login_manager.user_loader
def load_user(user_id):
    db = get_db()
    return ModelUser.get_by_id(db, int(user_id))

if __name__ == "__main__":
    app.run()