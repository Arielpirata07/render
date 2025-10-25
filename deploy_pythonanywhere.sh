#!/bin/bash

# Script de despliegue para PythonAnywhere
# Guarda este archivo como deploy_pythonanywhere.sh

echo "Iniciando despliegue en PythonAnywhere..."

# Asegúrate de reemplazar estos valores
USERNAME="tu_usuario"
PROJECT_NAME="Landing-Page-Barrio-Privado-Flask"
PYTHON_VERSION="python3.10"

# Crear directorio del proyecto si no existe
mkdir -p /home/$USERNAME/$PROJECT_NAME

# Crear y activar entorno virtual
cd /home/$USERNAME/$PROJECT_NAME
$PYTHON_VERSION -m venv env
source env/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Inicializar base de datos
python manage.py init-db

# Opcional: agregar datos de prueba
# python manage.py init-db --seed

# Establecer permisos
chmod -R 755 /home/$USERNAME/$PROJECT_NAME

echo "Despliegue completado."
echo "Recuerda:"
echo "1. Configurar tu aplicación web en la interfaz de PythonAnywhere"
echo "2. Apuntar al archivo WSGI correcto"
echo "3. Recargar la aplicación web"