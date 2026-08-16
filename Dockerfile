# Production Dockerfile - VietHeritage Chatbot on Render
# Uses OpenRouter for LLM inference, serves Project frontend

FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency files and install runtime deps into system Python
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Create non-root user
RUN useradd --create-home --shell /bin/bash appuser

# Copy backend application code
COPY --chown=appuser:appuser backend/app /app/app
COPY --chown=appuser:appuser backend/.env.example /app/.env.example

# Copy Project frontend (served by FastAPI StaticFiles)
COPY --chown=appuser:appuser Project /app/Project

# Switch to non-root user
USER appuser

# Environment variables
ENV IS_PRODUCTION=true

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Run the application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]