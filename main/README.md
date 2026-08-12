# AegisAI: VietHeritage Map
## Changing the world. One thing at a time

AegisAI: VietHeritage Map is an AI-powered cultural heritage platform that maps, explains, and brings to life Vietnam's tangible and intangible heritage. It combines an interactive heritage map, AI-guided artisan chat, ethnomusicological audio analysis, and voice interaction so that learners, researchers, and tourists can explore centuries of Vietnamese craft, music, and storytelling in one place—online or offline.

The project was built for the **VAIC-26 AegisAI** effort to preserve and democratize access to Vietnamese cultural treasures using modern, cost-efficient AI running primarily on local hardware.

---

## Table of Contents

- [Key Features](#key-features)
- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Repository Layout](#repository-layout)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Running the Services](#running-the-services)
- [API Reference](#api-reference)
- [Frontend Usage](#frontend-usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features

### 🗺️ Heritage Map & Sites
- Interactive Leaflet-based map of heritage sites across Vietnam.
- Filter sites by cultural layer (e.g., Bắc Bộ, Trung Bộ, Nam Bộ).
- Rich site detail pages with artifacts, audio assets, and 3D model viewers.
- Legacy static frontend served from `Project/` for unified local origin.

### 🧓 AI Artisan Chat (RAG-Lite)
- Chat with virtual artisan personas (e.g., ca trù, quan họ performers).
- **Retrieval-Augmented Generation** with keyword + vector (pgvector) search.
- Persona-aware few-shot prompting with strict anti-fabrication guardrails.
- Local LLM (Ollama) first, OpenRouter free-tier cloud fallback.
- Pre-recorded responses for high-confidence UNESCO-verified answers.

### 🎵 Ethnomusicology Audio Analysis
- ONNX-powered `EthnoMusicAnalyzer` classifies genre, instruments, and ornaments.
- Pitch tracking with `librosa.pyin`; waveform output for visualization.
- Voice grading: compare user recordings against reference samples.

### 🎤 Voice Interaction
- Voice chat: record audio → Whisper transcription → artisan chat.
- Bilingual (Vietnamese / English) responses and feedback.

### 📦 Asset & Storage
- MinIO object storage for audio, images, and 3D artifacts.
- PostgreSQL with `pgvector` for embedding similarity (dev), SQLite in prod.
- Seed & ingestion scripts for knowledge chunks, audio, and intangible data.

### 🩺 Observability
- Health checks for API, models, and cache.
- Sentry integration (optional) for error tracking.
- Structured logging and monitoring endpoints.

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                      Frontend (React + Vite)                 │
│  MapView · SiteDetail · ArtisanChat · AudioAnalyzer · 3D     │
└─────────────────────────────┬────────────────────────────────┘
                              │ REST / SSE
┌─────────────────────────────▼────────────────────────────────┐
│                       Backend (FastAPI)                       │
│  /api/v1/sites   /api/v1/artisan   /api/v1/audio   /api/v1/chat│
└───────┬───────────────┬───────────────┬───────────────┬───────┘
        │               │               │               │
        ▼               ▼               ▼               ▼
┌─────────────┐ ┌──────────────┐ ┌────────────┐ ┌──────────────┐
│ PostgreSQL  │ │ Ollama LLM   │ │ ONNX Model │ │ MinIO Store  │
│ + pgvector  │ │ (phi3.5)     │ │ (Ethno)    │ │ (assets)     │
└─────────────┘ └──────┬───────┘ └────────────┘ └──────────────┘
                       │ fallback
                       ▼
                ┌──────────────┐
                │ OpenRouter   │
                │ (free tier)  │
                └──────────────┘
```

---

## Tech Stack

**Backend**
- **Language:** Python 3.11+
- **Framework:** FastAPI, Uvicorn
- **ORM / DB:** SQLAlchemy 2.0, PostgreSQL 16 + pgvector (dev), SQLite + aiosqlite (prod)
- **AI / ML:** Ollama (phi3.5), ONNX Runtime, torchaudio, librosa, faster-whisper
- **Storage:** MinIO
- **Observability:** Sentry SDK, python-json-logger
- **Tooling:** Ruff, mypy, pytest, pre-commit, Alembic

**Frontend**
- **Framework:** React 18 + TypeScript 5
- **Bundler:** Vite 5
- **Map:** Leaflet + react-leaflet
- **State / Data:** Zustand, TanStack React Query, Axios
- **Styling:** Tailwind CSS 3
- **3D:** model-viewer
- **Icons:** lucide-react

**Infrastructure**
- Docker Compose (Postgres, Ollama, MinIO) for local development

---

## Repository Layout

```
aegisai_vaic-26/
├── docker-compose.yml          # Postgres + Ollama + MinIO
├── run_local.bat               # One-click Windows local launch
├── backend/
│   ├── app/
│   │   ├── main.py             # FastAPI app entrypoint
│   │   ├── api/v1/             # sites, artisan, audio, chat, monitoring
│   │   ├── core/               # config, database, cache, monitoring
│   │   ├── models/             # SQLAlchemy models (site, artisan, audio)
│   │   ├── schemas/            # Pydantic schemas
│   │   └── services/           # rag_lite, audio_analysis, embedding, chat
│   ├── models/                 # ONNX + PyTorch model artifacts
│   ├── scripts/                # seed, ingest, train, init-db
│   ├── tests/
│   ├── requirements.txt
│   ├── Dockerfile / Dockerfile.prod
│   └── render.yaml
├── frontend/
│   ├── src/                    # React app (pages, components, stores)
│   ├── public/                 # audio + image assets
│   ├── netlify.toml
│   └── vite.config.ts
└── Project/                    # Legacy static HTML frontend
```

---

## Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.11+
- **Docker** & Docker Compose (for services)
- **Git**
- (Optional) GPU for faster local LLM inference

---

## Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/PearTr0191/aegisai_vaic-26.git
cd aegisai_vaic-26
```

2. **Start infrastructure services**

```bash
docker compose up -d
```

3. **Backend setup**

```bash
cd backend
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
```

4. **Frontend setup**

```bash
cd ../frontend
npm install
```

5. **Run the full stack**

```bash
# Terminal 1 - backend
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - frontend
cd frontend
npm run dev
```

6. Open the apps:
- Frontend: `http://localhost:5173`
- API docs: `http://localhost:8000/docs`
- Legacy frontend: `http://localhost:8000/legacy`

> 💡 On Windows you can also double-click `run_local.bat` for a guided launch.

---

## Environment Variables

Create `backend/.env` from `backend/.env.example`. All necessary values are pre-filled for out-of-the-box functionality.

> **Note:** The `OPENROUTER_API_KEY` in `.env.example` is a shared demo key. The chatbot works immediately without any additional setup. For production or heavy usage, [get your own free key](https://openrouter.ai) and replace the value.

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_NAME` | Public API name | `VietHeritage Map API` |
| `DEBUG` | Enable docs/reload | `true` |
| `API_V1_PREFIX` | API route prefix | `/api/v1` |
| `DATABASE_URL` | Dev Postgres/SQLite connection | `sqlite+aiosqlite:///./vietheritage.db` |
| `OPENROUTER_API_KEY` | Cloud LLM key (works out of box) | `sk-or-v1-...` (demo key) |
| `OPENROUTER_MODEL` | Cloud chat model | `meta-llama/llama-3.2-3b-instruct:free` |
| `MINIO_ENDPOINT` | MinIO host:port | `localhost:9000` |
| `MINIO_ACCESS_KEY` | MinIO user | `vietheritage` |
| `MINIO_SECRET_KEY` | MinIO password | `vietheritage_dev` |
| `MINIO_BUCKET` | Asset bucket | `vietheritage-assets` |
| `ETHNOMUSIC_MODEL_PATH` | ONNX model path | `./models/ethnomusic_net_int8.onnx` |
| `WHISPER_MODEL_PATH` | Whisper model id | `openai/whisper-base` |
| `CORS_ORIGINS` | Allowed origins | `[http://localhost:5173, ...]` |
| `LOG_LEVEL` | Logging level | `INFO` |

---

## Running the Services

### Start infrastructure (Postgres, Ollama, MinIO)

```bash
docker compose up -d
```

### Pull the Ollama models

```bash
docker exec -it vietheritage-ollama ollama pull phi3.5:3.8b-mini-instruct-q4_k_m
docker exec -it vietheritage-ollama ollama pull nomic-embed-text:latest
```

### Seed the database

```bash
cd backend
python scripts/seed_database.py
python scripts/ingest_knowledge.py
python scripts/seed_audio.py
```

### Train the genre classifier (optional)

```bash
python scripts/train_genre_classifier.py
python scripts/create_placeholders.py
```

---

## API Reference

Base URL: `http://localhost:8000/api/v1`

### Sites

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/sites` | List heritage sites (optional `?layer=` filter) |
| `GET` | `/sites/{site_id}` | Get site details with audio & knowledge chunks |

```bash
curl "http://localhost:8000/api/v1/sites?layer=B%E1%BA%AFc%20B%E1%BB%99"
curl "http://localhost:8000/api/v1/sites/abc-123"
```

### Artisan Chat (RAG)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/artisan/ask` | Ask an artisan persona a question |

```json
{
  "persona_id": "e7ce269d-d116-5334-99b9-66062d5f55ed",
  "question": "Tại sao hát Quan họ phải trao trầu?",
  "lang": "vi"
}
```

### Unified Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/chat` | Text chat with heritage knowledge |
| `POST` | `/chat/voice` | Voice input → transcription → chat |
| `POST` | `/chat/grade` | Grade user singing against reference |

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hãy kể về ca trù","lang":"vi"}'
```

### Audio Analysis

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/audio/analyze` | Analyze traditional music (genre, instruments, techniques) |

```bash
curl -X POST http://localhost:8000/api/v1/audio/analyze \
  -F "file=@recording.wav"
```

### Health & Monitoring

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | API health status |
| `GET` | `/health/models` | Model availability check |
| `GET` | `/health/cache` | Cache statistics |

---

## Frontend Usage

```bash
cd frontend
npm run dev      # development server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint check
```

### Example: Viewing a site detail

Navigate to `http://localhost:5173/site/{siteId}` to see a site's artifacts, 3D models, and audio samples. Use the map at `/` to discover sites and the analyzer at `/analyzer` to classify audio.

### Example: Chatting with an artisan

Visit `http://localhost:5173/artisan/{personaId}`. The persona will respond in the persona's voice and language, citing knowledge chunks when confident.

---

## Deployment

The application is deployed as a single service on Render:

- **Web** → [Render](https://aegisai-vaic-26.onrender.com) (`render.yaml`, `backend/Dockerfile.prod`)
  - Full-stack deployment (FastAPI serves the React frontend build)
  - Production database: SQLite (`vietheritage.db`)
  - Demo `OPENROUTER_API_KEY` pre-configured in `backend/render.yaml`
  - No separate frontend deployment needed - API and static files served together

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. Install dev dependencies and hooks:

```bash
cd backend
pip install -e ".[dev]"
pre-commit install
```

3. Keep code clean — the project uses `ruff` (lint + format) and `mypy` (types).

```bash
ruff check . --fix
ruff format .
mypy app
```

4. Run tests before opening a pull request:

```bash
pytest -q
```

5. Commit with clear messages and open a PR against `main`.

---

## License

This project is licensed under the **MIT License** — see the repository for the full text. You are free to use, modify, and distribute this software provided that the original copyright notice and permission notice are included in all copies.

---

<p align="center">
  <em>AegisAI · VietHeritage Map — Preserving Vietnamese heritage, one story at a time.</em>
</p>
