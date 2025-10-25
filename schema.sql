-- Schema for Landing Page Barrio Privado Flask
-- Uses IF NOT EXISTS so running multiple times is safe

CREATE TABLE IF NOT EXISTS USERS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(80),
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT 0
);

CREATE TABLE IF NOT EXISTS CONTACTS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60),
    phone VARCHAR(30),
    email VARCHAR(100) NOT NULL,
    message VARCHAR(200)
);
