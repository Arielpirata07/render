# Guía de configuración del entorno

## Variables de entorno

El proyecto usa variables de entorno para la configuración. Crea un archivo `.env` en la raíz del proyecto:

```bash
# Copiar .env.example a .env y configurar
cp .env.example .env
```

### Variables disponibles

- `APP_ENV`: Entorno de ejecución ('development' o 'production')
- `SECRET_KEY`: Clave secreta para sesiones y CSRF
- `DATABASE`: Ruta a la base de datos SQLite (por defecto 'users.db')
- `FLASK_APP`: Archivo principal de Flask (main.py)
- `FLASK_ENV`: Entorno Flask (development/production)
- `FLASK_DEBUG`: Activar modo debug (1/0)

### Desarrollo local

1. Crear entorno virtual:
```bash
python -m venv env
```

2. Activar entorno:
```powershell
# Windows PowerShell
env\Scripts\Activate.ps1

# Windows CMD
env\Scripts\activate.bat

# Linux/Mac
source env/bin/activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar variables:
```bash
# Copiar template
cp .env.example .env

# Editar .env con tus valores
```

5. Inicializar base de datos:
```bash
python manage.py init-db --seed  # --seed es opcional
```

6. Ejecutar servidor desarrollo:
```bash
python main.py
```

### Producción (Railway)

En Railway, configura estas variables de entorno:

- `APP_ENV=production`
- `SECRET_KEY=<una-clave-segura>`
- `DATABASE=users.db` (o URL de PostgreSQL)

## Estructura de archivos

```
├── .env                # Variables locales (no commitear)
├── .env.example       # Template de variables
├── config.py          # Configuración según ambiente
├── main.py           # Aplicación Flask
├── manage.py         # Comandos CLI (ej: init-db)
└── requirements.txt   # Dependencias Python
```