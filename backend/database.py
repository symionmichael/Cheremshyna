from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from config import SQLALCHEMY_DATABASE_URL

connect_args = {}
if SQLALCHEMY_DATABASE_URL.startswith("sqlite"):
    # SQLite potřebuje tenhle flag, protože FastAPI může používat
    # jednu connection z více threadů (async workery).
    connect_args = {"check_same_thread": False}

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args=connect_args)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()