import os
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy import inspect, text
from sqlalchemy.orm import Session

import auth
import crud
import models
import schemas
from config import ALLOWED_ORIGINS, STATIC_DIR
from database import Base, engine, get_db


def migrate_database() -> None:
    inspector = inspect(engine)
    table_names = set(inspector.get_table_names())

    if "visits" in table_names:
        visit_columns = {column["name"] for column in inspector.get_columns("visits")}
        if "ip_adress" in visit_columns and "ip_address" not in visit_columns:
            with engine.begin() as connection:
                connection.execute(
                    text("ALTER TABLE visits RENAME COLUMN ip_adress TO ip_address")
                )

    if "users" in table_names:
        user_columns = {column["name"] for column in inspector.get_columns("users")}
        if "created_at" not in user_columns:
            with engine.begin() as connection:
                connection.execute(text("ALTER TABLE users ADD COLUMN created_at DATETIME"))


@asynccontextmanager
async def lifespan(app: FastAPI):
    migrate_database()
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(title="Sledování návštěvnosti - API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Authorization", "Content-Type"],
)

if os.path.isdir(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/api/track/visit", response_model=schemas.VisitOut)
def track_visit(visit: schemas.VisitCreate, request: Request, db: Session = Depends(get_db)):
    ip = request.client.host if request.client else "unknown"
    user_agent = request.headers.get("user-agent", "unknown")
    return crud.create_visit(db, visit, ip, user_agent)


@app.post("/api/track/event", response_model=schemas.EventOut)
def track_event(event: schemas.EventCreate, db: Session = Depends(get_db)):
    return crud.create_event(db, event)


@app.post("/api/track/leave/{visit_id}")
def track_leave(
    visit_id: int,
    seconds: int = Query(ge=0, le=604800),
    db: Session = Depends(get_db),
):
    """Zavolá se při odchodu ze stránky - doplní čas strávený na stránce."""
    visit = db.query(models.Visit).filter(models.Visit.id == visit_id).first()
    if not visit:
        raise HTTPException(status_code=404, detail="Návštěva nenalezena")
    visit.time_on_page = seconds
    db.commit()
    return {"status": "ok"}


@app.post("/login", response_model=schemas.Token)
def login(data: schemas.LoginRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == data.username).first()
    if not user or not auth.verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Špatné jméno nebo heslo")
    token = auth.create_access_token(data={"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}


@app.get("/api/admin/visits", response_model=list[schemas.VisitOut])
def admin_visits(
    limit: int = Query(default=200, ge=1, le=500),
    offset: int = Query(default=0, ge=0),
    db: Session = Depends(get_db),
    current_admin: models.User = Depends(auth.get_current_admin),
):
    return crud.get_all_visits(db, limit=limit, offset=offset)


@app.get("/api/admin/stats", response_model=schemas.StatsOut)
def admin_stats(
    db: Session = Depends(get_db),
    current_admin: models.User = Depends(auth.get_current_admin),
):
    return crud.get_stats(db)
