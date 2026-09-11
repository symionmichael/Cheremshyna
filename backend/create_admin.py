"""
Skript pro vytvoření admin účtu.

Spusť: python create_admin.py
"""
import getpass

import auth
import models
from database import Base, SessionLocal, engine

Base.metadata.create_all(bind=engine)
db = SessionLocal()

try:
    username = input("Zadej admin jméno: ").strip()
    if not username:
        print("Uživatelské jméno nesmí být prázdné.")
        raise SystemExit(1)

    password = getpass.getpass("Zadej admin heslo: ")
    password_confirm = getpass.getpass("Zadej heslo znovu: ")

    if password != password_confirm:
        print("Hesla se neshodují.")
        raise SystemExit(1)

    if len(password) < 8:
        print("Heslo musí mít alespoň 8 znaků.")
        raise SystemExit(1)

    existing = db.query(models.User).filter(models.User.username == username).first()
    if existing:
        print("Uživatel už existuje.")
    else:
        admin = models.User(
            username=username,
            hashed_password=auth.get_password_hash(password),
            is_admin=True,
        )
        db.add(admin)
        db.commit()
        print(f"Admin '{username}' byl úspěšně vytvořen.")
finally:
    db.close()