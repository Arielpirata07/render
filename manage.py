import argparse
import sqlite3
from main import app, init_db, get_db


def init_db_command(seed: bool = False):
    """Initialize the database using `schema.sql`. If seed=True, insert sample data."""
    with app.app_context():
        # main.init_db() uses app.open_resource('schema.sql')
        init_db()
        print('Initialized the database schema.')

        if seed:
            db = get_db()
            cur = db.cursor()
            try:
                # Insert a test user and contact (use INSERT OR IGNORE to avoid duplicates)
                cur.execute("INSERT OR IGNORE INTO USERS (username, email, password, is_admin) VALUES (?,?,?,?)",
                            ("test_user", "test@example.com", "test-password-hash", False))
                cur.execute("INSERT INTO CONTACTS (name, phone, email, message) VALUES (?,?,?,?)",
                            ("Seed User", "000-0000", "seed@example.com", "Mensaje de seed para pruebas"))
                db.commit()
                print('Seed data inserted.')
            except sqlite3.IntegrityError as e:
                print('Seed insertion skipped or failed:', e)


def main(argv=None):
    parser = argparse.ArgumentParser(description='Management commands for the Flask app')
    parser.add_argument('command', nargs='?', default='init-db', help='Command to run (init-db)')
    parser.add_argument('--seed', action='store_true', help='Insert seed data after initializing DB')
    args = parser.parse_args(argv)

    if args.command in ('init-db', 'init_db'):
        init_db_command(seed=args.seed)
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
