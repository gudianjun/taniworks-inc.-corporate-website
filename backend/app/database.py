"""Database configuration and initialization"""
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database file path
DATABASE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
DATABASE_FILE = os.path.join(DATABASE_DIR, "taniworks.db")
DATABASE_URL = f"sqlite:///{DATABASE_FILE}"

# Ensure data directory exists
os.makedirs(DATABASE_DIR, exist_ok=True)

# Create engine
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Needed for SQLite
)

# Create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

def get_db():
    """Dependency to get database session"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Initialize database tables"""
    Base.metadata.create_all(bind=engine)
