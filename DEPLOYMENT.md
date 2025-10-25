# Instrucciones de despliegue (Railway)

Estas instrucciones te ayudarán a desplegar la app Flask en Railway y a comprobar que la base de datos funciona.

Requisitos
- Railway account (o cualquier PaaS compatible con Procfile/Gunicorn)
- `requirements.txt` actualizado (ya contiene `gunicorn`)

Variables de entorno requeridas
- `SECRET_KEY` — clave para CSRF y sesiones (ej: una cadena larga aleatoria)
- `APP_ENV` — `production` en Railway (opcional, por defecto `development`)
- `DATABASE` — ruta o URL de la base de datos. Por defecto la app usa `users.db` (SQLite). Si usas Postgres, pon aquí la URL y migra el código.

Pasos para desplegar en Railway
1. Crea un nuevo proyecto en Railway y conecta tu repositorio.
2. En Settings -> Environment Variables, añade:
   - `SECRET_KEY` = (tu secreto)
   - `APP_ENV` = production
   - (opcional) `DATABASE` = /path/to/users.db o la URL de tu DB gestionada
3. Asegúrate de que el proyecto tiene un `Procfile` en la raíz con:
   ```text
   web: gunicorn main:app
   ```
4. Railway instalará dependencias usando `requirements.txt` y ejecutará Gunicorn.

Inicializar la base de datos (local y en Railway)
- Local (PowerShell):
  ```powershell
  $env:APP_ENV='development'; $env:SECRET_KEY='mi-secreto-local'; "env\Scripts\python.exe" -c "from main import init_db, app; import json; print('creating DB');
  with app.app_context(): init_db(); print('done')"
  ```
  Esto cargará `schema.sql` (si existe en la raíz) y creará tablas en `users.db`.

- Si no tienes `schema.sql`, la app ya contiene una base SQLite llamada `users.db` en el repo; puedes inspeccionarla localmente con SQLite.

Notas sobre persistencia
- SQLite guarda `users.db` en el sistema de archivos del contenedor. En Railway, los contenedores pueden ser efímeros: los datos locales pueden perderse al redeploy.
- Recomendación: usar un servicio de base de datos gestionado (Postgres) en Railway y migrar el código para usar `DATABASE_URL` y un ORM o `psycopg2`.

Pruebas locales rápidas
- Ejecutar la app localmente usando Gunicorn (simula producción):
  ```powershell
  env\Scripts\gunicorn main:app
  ```
- Ejecutarla en modo desarrollo:
  ```powershell
  env\Scripts\python.exe main.py
  ```

Verificación de que los contactos se guardan
1. Accede a la raíz `/` y envía el formulario de contacto. Los formularios deben usar `method="post"` (ya corregido).
2. Localmente puedes comprobar el número de filas en `users.db` con un snippet de Python (ejecutar desde la raíz del proyecto):
  ```powershell
  env\Scripts\python.exe - <<'PY'
  import sqlite3
  conn=sqlite3.connect('users.db')
  cur=conn.cursor()
  cur.execute("SELECT COUNT(*) FROM CONTACTS")
  print(cur.fetchone())
  conn.close()
  PY
  ```

Problemas conocidos y recomendaciones
- El proyecto usa `email_validator` que realiza comprobaciones de deliverability; en entornos sin DNS/internet las validaciones pueden tirar errores. Para pruebas locales, desactivar temporalmente o usar emails reales.
- Si quieres persistencia y concurrencia reales, migrar a Postgres y usar SQLAlchemy.

Si quieres, puedo:
- Añadir un comando CLI (`python manage.py init-db`) para inicializar la base de datos de forma reproducible.
- Migrar la app para usar Postgres con SQLAlchemy y generar un `DATABASE_URL` compatible con Railway.
- Añadir tests automáticos para la ruta `index` y la funcionalidad de contacto.
