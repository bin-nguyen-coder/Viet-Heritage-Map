from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import logging

try:
    import sentry_sdk
except ImportError:
    sentry_sdk = None

from app.core.config import settings
from app.core.database import init_db
from app.core.monitoring import init_sentry, ModelHealthChecker
from app.api.v1 import sites, artisan, audio, monitoring, chat, recommend

# Configure logging
logging.basicConfig(
    level=getattr(logging, settings.LOG_LEVEL),
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_sentry()
    logger.info("Starting VietHeritage API")
    await init_db()
    logger.info("Database initialized")
    yield
    logger.info("Shutting down VietHeritage API")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
)

# CORS - allow all origins for production (set specific origins in CORS_ORIGINS env var)
if "*" in settings.CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
else:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Health check (MUST be before StaticFiles mount to avoid being shadowed)
@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.APP_VERSION}


@app.get("/health/models")
async def model_health_check():
    return await ModelHealthChecker.check_all()


@app.get("/health/cache")
async def cache_stats():
    from app.core.cache import cache
    return cache.stats()


# API Routes (MUST be before StaticFiles mount to avoid being shadowed)
app.include_router(sites.router, prefix=settings.API_V1_PREFIX)
app.include_router(artisan.router, prefix=settings.API_V1_PREFIX)
app.include_router(audio.router, prefix=settings.API_V1_PREFIX)
app.include_router(monitoring.router, prefix=settings.API_V1_PREFIX)
app.include_router(chat.router, prefix=settings.API_V1_PREFIX)
app.include_router(recommend.router, prefix=settings.API_V1_PREFIX)

# Serve Project frontend from / (MUST be AFTER all routes to avoid shadowing API endpoints)
STATIC_DIR = Path(__file__).resolve().parent.parent.parent / "Project"
if STATIC_DIR.exists():
    app.mount(
        "/",
        StaticFiles(directory=str(STATIC_DIR), html=True),
        name="project-frontend",
    )


# --- Error Handlers ---

@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    logger.warning(f"HTTP {exc.status_code} on {request.url.path}: {exc.detail}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )


@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError):
    logger.error(f"Validation error on {request.url.path}: {exc}")
    return JSONResponse(
        status_code=400,
        content={"detail": str(exc)},
    )


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.exception(f"Unhandled error on {request.url.path}: {exc}")
    if settings.SENTRY_DSN and sentry_sdk:
        sentry_sdk.capture_exception(exc)
    if settings.DEBUG:
        raise
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"},
    )