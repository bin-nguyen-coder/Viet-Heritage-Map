#!/bin/bash
# Localhost fallback script - runs full stack locally if cloud deploy fails
# Usage: ./scripts/local_fallback.sh

set -e

echo "======================================"
echo "VietHeritage Map - Local Fallback Mode"
echo "======================================"
echo ""

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker not found. Please install Docker Desktop."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "ERROR: docker-compose not found."
    exit 1
fi

echo "1. Starting local services (Postgres, Ollama, MinIO)..."
docker-compose up -d postgres ollama minio

echo "2. Waiting for services to be healthy..."
sleep 10

# Wait for Postgres
echo "   Waiting for Postgres..."
for i in {1..30}; do
    if docker exec vietheritage-postgres pg_isready -U vietheritage -d vietheritage &> /dev/null; then
        echo "   Postgres ready!"
        break
    fi
    sleep 1
done

# Wait for Ollama
echo "   Waiting for Ollama..."
for i in {1..60}; do
    if curl -s http://localhost:11434/api/tags &> /dev/null; then
        echo "   Ollama ready!"
        break
    fi
    sleep 2
done

# Pull models if needed
echo "3. Ensuring Ollama models are available..."
docker exec vietheritage-ollama ollama pull phi3.5:3.8b-mini-instruct-q4_k_m &> /dev/null || true
docker exec vietheritage-ollama ollama pull nomic-embed-text:latest &> /dev/null || true

echo "4. Initializing database..."
docker exec -i vietheritage-postgres psql -U vietheritage -d vietheritage < backend/scripts/init-db.sql 2>/dev/null || true

echo "5. Starting FastAPI backend..."
cd backend
# Install deps if needed
if [ ! -d ".venv" ]; then
    echo "   Creating virtual environment..."
    python -m venv .venv
    source .venv/bin/activate
    pip install -e .
else
    source .venv/bin/activate
fi

# Run seed
echo "   Seeding database..."
python scripts/seed_database.py

# Start server in background
echo "   Starting API server on http://localhost:8000..."
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!

cd ..

echo "6. Starting Frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "   Installing npm dependencies..."
    npm install
fi

echo "   Starting Vite dev server on http://localhost:5173..."
npm run dev &
FRONTEND_PID=$!

cd ..

echo ""
echo "======================================"
echo "LOCAL FALLBACK RUNNING"
echo "======================================"
echo ""
echo "Backend API:  http://localhost:8000"
echo "API Docs:     http://localhost:8000/docs"
echo "Health:       http://localhost:8000/health"
echo "Model Health: http://localhost:8000/health/models"
echo ""
echo "Frontend:     http://localhost:5173"
echo ""
echo "Ollama:       http://localhost:11434"
echo "MinIO Console: http://localhost:9001 (vietheritage/vietheritage_dev)"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Trap Ctrl+C
trap "echo 'Stopping...'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; docker-compose down; exit 0" INT

# Wait
wait $BACKEND_PID $FRONTEND_PID