import sqlite3
users_db = sqlite3.connect('users.db')      # crea archivo users.db si no existe
cursor = users_db.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS USERS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(60) NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(102) NOT NULL,
    is_admin BOOLEAN NOT NULL
)""")
cursor.execute("""CREATE TABLE IF NOT EXISTS CONTACTS(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60) NULL,
    phone VARCHAR(30) NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    message VARCHAR(200) NULL
)""")
users_db.commit()
users_db.close()