"""
Archivo de configuración WSGI para PythonAnywhere
Este archivo debe colocarse en la ruta que PythonAnywhere te indique
Típicamente: /var/www/tu_usuario_pythonanywhere_com_wsgi.py
"""

import sys
import os

# Reemplaza esto con tu username de PythonAnywhere y el nombre de tu proyecto
PYTHONANYWHERE_USERNAME = 'Arielpirata07'
PROJECT_NAME = 'Landing-Page-Barrio-Privado-Flask'

# Construir la ruta al proyecto
project_home = f'/home/{PYTHONANYWHERE_USERNAME}/{PROJECT_NAME}'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

# Cargar variables de entorno desde .env si existe
from dotenv import load_dotenv
env_path = os.path.join(project_home, '.env')
if os.path.exists(env_path):
    load_dotenv(env_path)

# Establecer variables de entorno para producción
os.environ['APP_ENV'] = 'production'
os.environ['DATABASE'] = os.path.join(project_home, 'users.db')
if not os.environ.get('SECRET_KEY'):
    os.environ['SECRET_KEY'] = 'production-secret-key-change-me'

# Importar la aplicación Flask
from main import app as application