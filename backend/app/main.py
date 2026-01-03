"""FastAPI main application"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db, SessionLocal
from app.models.history import CompanyHistory
from app.api.history import router as history_router

app = FastAPI(title="TaniWorks API", version="1.0.0")

# CORS middleware (allow frontend to call API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(history_router)

@app.on_event("startup")
async def startup_event():
    """Initialize database on startup"""
    # Create tables
    init_db()

    # Check if we need to insert initial data
    db = SessionLocal()
    try:
        count = db.query(CompanyHistory).count()
        if count == 0:
            # Insert initial sample data
            initial_data = [
                {
                    "date": "2026年1月",
                    "event_jp": "設立",
                    "event_en": "Established",
                    "event_cn": "成立",
                    "order": 1
                },
                {
                    "date": "2026年2月",
                    "event_jp": "C#/.NET開発サービス開始",
                    "event_en": "Started C#/.NET Development Services",
                    "event_cn": "开始C#/.NET开发服务",
                    "order": 2
                },
                {
                    "date": "2026年3月",
                    "event_jp": "レガシーシステム現代化コンサルティング開始",
                    "event_en": "Started Legacy System Modernization Consulting",
                    "event_cn": "开始传统系统现代化咨询服务",
                    "order": 3
                }
            ]

            for data in initial_data:
                history_item = CompanyHistory(**data)
                db.add(history_item)

            db.commit()
            print("✅ Initial company history data inserted")
    finally:
        db.close()

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "TaniWorks API"}
