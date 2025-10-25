# Instrucciones de Despliegue en PythonAnywhere

## Pasos para el Despliegue

1. Crear una cuenta en PythonAnywhere
   - Ve a https://www.pythonanywhere.com
   - Regístrate para una cuenta gratuita

2. Subir el código
   ```bash
   # En la consola de PythonAnywhere:
   git clone https://github.com/TU_USUARIO/Landing-Page-Barrio-Privado-Flask.git
   # O sube los archivos manualmente desde la interfaz web
   ```

3. Configurar el entorno virtual
   ```bash
   cd Landing-Page-Barrio-Privado-Flask
   python3.10 -m venv env
   source env/bin/activate
   pip install -r requirements.txt
   ```

4. Inicializar la base de datos
   ```bash
   python manage.py init-db
   # Opcional: agregar datos de ejemplo
   python manage.py init-db --seed
   ```

5. Configurar la aplicación web en PythonAnywhere
   - Ve a la pestaña "Web"
   - Haz clic en "Add a new web app"
   - Selecciona "Manual configuration"
   - Selecciona Python 3.10

6. Configurar el archivo WSGI
   - En la sección "Code" de tu aplicación web
   - Haz clic en el enlace WSGI configuration file
   - Reemplaza el contenido con el de `pythonanywhere_wsgi.py`
   - Actualiza las variables `PYTHONANYWHERE_USERNAME` y `PROJECT_NAME`

7. Configurar rutas en PythonAnywhere
   - En "Code" > "Source code": `/home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask`
   - En "Code" > "Working directory": `/home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask`
   - En "Virtualenv": `/home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask/env`

8. Variables de entorno (en la pestaña "Web")
   ```
   APP_ENV=production
   SECRET_KEY=tu-clave-secreta-aqui
   DATABASE=/home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask/users.db
   ```

9. Archivos estáticos
   - En la sección "Static files" añade:
   - URL: /static/
   - Path: /home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask/static

10. Recargar la aplicación
    - Haz clic en el botón "Reload TU_USUARIO.pythonanywhere.com"

## Solución de Problemas

1. Logs de error
   - Revisa "Web" > "Log files"
   - Error log: /var/log/TU_USUARIO.pythonanywhere.com.error.log
   - Access log: /var/log/TU_USUARIO.pythonanywhere.com.access.log

2. Permisos de archivos
   ```bash
   chmod -R 755 /home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask
   chmod 666 /home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask/users.db
   ```

3. Base de datos
   - SQLite está en la ruta: /home/TU_USUARIO/Landing-Page-Barrio-Privado-Flask/users.db
   - Asegúrate de que el directorio tenga permisos de escritura

## Mantenimiento

1. Actualizar código
   ```bash
   cd ~/Landing-Page-Barrio-Privado-Flask
   git pull  # si usas git
   # O sube los archivos actualizados manualmente
   ```

2. Reiniciar la aplicación
   - Ve a la pestaña "Web"
   - Haz clic en "Reload TU_USUARIO.pythonanywhere.com"

3. Backup de la base de datos
   ```bash
   cp users.db users.db.backup
   ```