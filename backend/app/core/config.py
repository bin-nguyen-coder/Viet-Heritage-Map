from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # App
    APP_NAME: str = "VietHeritage Map API"
    APP_VERSION: str = "0.1.0"
    DEBUG: bool = True
    API_V1_PREFIX: str = "/api/v1"

    # Database - SQLite
    DATABASE_URL: str = "sqlite+aiosqlite:///./vietheritage.db"
    DATABASE_URL_PROD: str = "sqlite+aiosqlite:///./vietheritage.db"

    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "https://vietheritage.netlify.app",
        "https://aegisai-vaic-26.onrender.com",
        "http://localhost:5000",
        "http://localhost:8000",
    ]

    # Render / Production
    RENDER_EXTERNAL_URL: str = ""
    IS_PRODUCTION: bool = False

    # Logging
    LOG_LEVEL: str = "INFO"

    @property
    def database_url(self) -> str:
        if self.IS_PRODUCTION:
            return self.DATABASE_URL_PROD
        return self.DATABASE_URL


settings = Settings()
