from .entities.User import User
class ModelUser():
    @classmethod
    def login(self, db, email, plaintext_password):
        """Attempt to log in by email and plaintext password.

        Returns a tuple (user_or_none, status) where status is one of:
          - 'OK' when authentication succeeded (user returned)
          - 'INVALID_PASSWORD' when email exists but password doesn't match
          - 'NOT_FOUND' when no user with that email exists
        """
        try:
            cursor = db.cursor()
            sql = """SELECT id, username, email, password, is_admin
            FROM USERS WHERE email = ?"""
            cursor.execute(sql, (email,))
            row = cursor.fetchone()
            # row: (id, username, email, password_hash, is_admin)
            if row is None:
                return None, 'NOT_FOUND'
            # verify password using the stored hash
            if User.check_password(row[3], plaintext_password):
                # return a User instance populated from DB (pass stored hash)
                return User(row[0], row[1], row[2], row[3], row[4]), 'OK'
            return None, 'INVALID_PASSWORD'
        except Exception as ex:
            raise(Exception(ex))
    def get_by_id(db, id):
        try:
            cursor = db.cursor()
            sql = """SELECT id, username, email, password, is_admin
            FROM USERS WHERE id = ?"""
            cursor.execute(sql, (id,))
            row = cursor.fetchone()
            if row != None:
                return User(row[0], row[1], row[2], row[3], row[4])
            else:
                return None
        except Exception as ex:
            raise(Exception(ex))