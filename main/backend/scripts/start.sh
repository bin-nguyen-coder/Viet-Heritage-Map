#!/bin/bash
set -e

echo "Starting VietHeritage Map Backend..."

# Run database migrations if needed
echo "Running database initialization..."
python -c "
from app.core.database import init_db
import asyncio
asyncio.run(init_db())
" || echo "Database init skipped (may already exist)"

# Start FastAPI application
echo "Starting FastAPI server..."
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 1