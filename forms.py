from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, TextAreaField, BooleanField
from wtforms.validators import DataRequired, Email, Length

class SignupForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=2, max=50)])
    last_name = StringField('last-name', validators=[DataRequired(), Length(min=2, max=50)])
    email = StringField('email', validators=[DataRequired(), Email(), Length(max=120)])
    password = PasswordField('password', validators=[DataRequired(), Length(min=6)])
    conf_pass = PasswordField('conf_pass', validators=[DataRequired(), Length(min=6)])
    submit = SubmitField('Registrarse', render_kw={'data-translate':'register_btn'})

class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), Email(), Length(max=120)])
    password = PasswordField('password', validators=[DataRequired()])
    remember_me = BooleanField('remember_me')
    submit = SubmitField('Log In')
    
class ContactForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=2, max=50)])
    phone = StringField('phone', validators=[ DataRequired(),Length(max=20)])
    email = StringField('email', validators=[DataRequired(), Email(), Length(max=120)])
    message = TextAreaField('message', validators=[ Length(min=10, max=500)])
    submit = SubmitField('Send Message')