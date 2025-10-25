from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
class User(UserMixin):
    def __init__(self, id, username, email, password, is_admin = False):
      self.id = id
      self.username = username
      self.email = email
      # If password looks like an already-hashed value (werkzeug/argon2/scrypt formats), keep it as-is.
      # Otherwise, hash the plain-text password.
      if isinstance(password, str) and (password.startswith('pbkdf2:') or password.startswith('scrypt:') or password.startswith('argon2:')):
        self.password = password
      else:
        self.password = generate_password_hash(password)
      self.is_admin = is_admin

    @classmethod
    def set_password(self,password):
      # store hashed password
      self.password = generate_password_hash(password)
        
    @classmethod
    def check_password(self,hashed_password,password):
      return check_password_hash(hashed_password, password)
    
    def __repr__(self):
      return f'User: {self.email}'

def get_user(email):
  db = sqlite3.connect('users.db')
  cursor = db.cursor()
  cursor.execute("SELECT id, username, email, password, is_admin FROM USERS")
  users = cursor.fetchall() 
  for i in users:
    print(i.email)
    if i.email == email:
      return i
    else:
      return None