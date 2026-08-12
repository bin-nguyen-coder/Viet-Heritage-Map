from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict
import os

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

    # Database - use SQLite for local testing
    DATABASE_URL: str = "sqlite+aiosqlite:///./vietheritage.db"
    DATABASE_URL_PROD: str = "sqlite+aiosqlite:///./vietheritage.db"

    # Ollama (local) - DEPRECATED: Using OpenRouter for cloud LLM
    OLLAMA_HOST: str = "http://localhost:11434"
    OLLAMA_MODEL: str = "phi3.5:3.8b-mini-instruct-q4_k_m"
    OLLAMA_EMBED_MODEL: str = "nomic-embed-text:latest"

    # Small talk model (lightweight, for off-topic chat only)
    SMALL_TALK_MODEL: str = "gemma3:270m"

    # OpenRouter (for $0-cost cloud LLM) - PRIMARY after Ollama removal
    OPENROUTER_API_KEY: str = os.getenv('OPENROUTER_API_KEY')
    OPENROUTER_MODEL: str = "meta-llama/llama-3.2-3b-instruct:free"
    OPENROUTER_EMBED_MODEL: str = "nomic/nomic-embed-text-v1:0"

    # MinIO
    MINIO_ENDPOINT: str = "localhost:9000"
    MINIO_ACCESS_KEY: str = "vietheritage"
    MINIO_SECRET_KEY: str = "vietheritage_dev"
    MINIO_BUCKET: str = "vietheritage-assets"
    MINIO_SECURE: bool = False

    # ONNX Model
    ETHNOMUSIC_MODEL_PATH: str = "./models/ethnomusic_net_int8.onnx"

    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:5500",   # VS Code Go Live
        "http://127.0.0.1:5500",   # VS Code Go Live (alt)
        "https://vietheritage.netlify.app",
        "https://aegisai-vaic-26.onrender.com",
        "http://localhost:5000",  # Flask dev
        "http://localhost:8000",  # FastAPI legacy frontend
    ]

    # Render / Production
    RENDER_EXTERNAL_URL: str = ""
    IS_PRODUCTION: bool = False

    # Whisper (for voice transcription)
    WHISPER_MODEL_PATH: str = "openai/whisper-base"

    # Sentry
    SENTRY_DSN: str = ""
    SENTRY_TRACES_SAMPLE_RATE: float = 0.1

    # Logging
    LOG_LEVEL: str = "INFO"

    @property
    def database_url(self) -> str:
        if self.IS_PRODUCTION:
            return self.DATABASE_URL_PROD
        return self.DATABASE_URL

settings = Settings()