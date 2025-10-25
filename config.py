import os


class Config:
    """Configuración base - los valores pueden ser sobreescritos por variables de entorno"""
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-replace-in-production')
    DATABASE = os.getenv('DATABASE', 'users.db')

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
    # En producción, asegúrate de configurar SECRET_KEY y DATABASE en las variables de entorno


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
}