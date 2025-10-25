# Crea un nuevo entorno virtual
python -m venv env

# Activa el entorno virtual
.\env\Scripts\activate

# Instala las dependencias
pip install -r requirements.txt

# Copia el archivo de variables de entorno
copy .env.example .env

# Inicializa la base de datos con datos de ejemplo
python manage.py init-db --seed