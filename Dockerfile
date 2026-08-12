# Production Dockerfile - VietHeritage Chatbot on Render
# Uses OpenRouter for LLM inference, serves Project frontend

FROM python:3.11-slim AS builder

WORKDIR /build

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copy dependency files
COPY backend/pyproject.toml ./
COPY backend/uv.lock* ./
RUN uv sync --frozen --no-dev

# Production runtime
FROM python:3.11-slim AS runtime

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd --create-home --shell /bin/bash appuser

# Copy Python dependencies from builder
COPY --from=builder /build/.venv /app/.venv

# Copy backend application code
COPY --chown=appuser:appuser backend/app /app/app
COPY --chown=appuser:appuser backend/models /app/models
COPY --chown=appuser:appuser backend/.env.example /app/.env.example

# Copy Project frontend (served by FastAPI StaticFiles)
COPY --chown=appuser:appuser Project /app/Project

# Switch to non-root user
USER appuser

# Set PATH
ENV PATH="/app/.venv/bin:${PATH}"

# Environment variables
ENV IS_PRODUCTION=true

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Run the application
CMD ["uv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]