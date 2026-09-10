from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_admin = Column(Integer, default=1)

    class Visit(Base):
        __tablename__ = "visits"

        id = Column(Integer, primary_key=True, index=True)
        session_id = Column(String, index=True)
        page = Column(String)
        ip_adress = Column(String)
        user_agent = Column(String)
        referrer = Column(String, nullable=True)
        timestamp = Column(DateTime, default=datetime.utcnow)
        time_on_page = Column(Integer, nullable=True)

        events = relationship("Event", back_populates="visit")


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    visit_id = Column(Integer, ForeignKey("visits.id"))
    event_type =Column(String)
    element =Column(String, nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

    visit = relationship("Visit", back_populates="events")
    