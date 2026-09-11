from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

import models
import schemas


def create_visit(db: Session, visit: schemas.VisitCreate, ip: str, user_agent: str) -> models.Visit:
    db_visit = models.Visit(
        session_id=visit.session_id,
        page=visit.page,
        referrer=visit.referrer,
        ip_address=ip,
        user_agent=user_agent,
    )
    try:
        db.add(db_visit)
        db.commit()
        db.refresh(db_visit)
    except SQLAlchemyError:
        db.rollback()
        raise
    return db_visit


def create_event(db: Session, event: schemas.EventCreate) -> models.Event:
    last_visit = (
        db.query(models.Visit)
        .filter(models.Visit.session_id == event.session_id)
        .filter(models.Visit.time_on_page.is_(None))
        .order_by(models.Visit.id.desc())
        .first()
    )
    db_event = models.Event(
        visit_id=last_visit.id if last_visit else None,
        event_type=event.event_type,
        element=event.element,
    )
    try:
        db.add(db_event)
        db.commit()
        db.refresh(db_event)
    except SQLAlchemyError:
        db.rollback()
        raise
    return db_event


def get_all_visits(db: Session, limit: int = 200, offset: int = 0):
    return (
        db.query(models.Visit)
        .order_by(models.Visit.timestamp.desc())
        .offset(offset)
        .limit(limit)
        .all()
    )


def get_stats(db: Session) -> dict:
    total_visits = db.query(models.Visit).count()
    unique_sessions = db.query(models.Visit.session_id).distinct().count()
    total_events = db.query(models.Event).count()
    return {
        "total_visits": total_visits,
        "unique_visitors": unique_sessions,
        "total_events": total_events,
    }
