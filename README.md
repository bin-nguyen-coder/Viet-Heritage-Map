# LimitlessX · VietHeritage Map
## Connecting Heritage — Inspiring the Future

**LimitlessX · VietHeritage** is an AI-powered digital museum archiving and reviving Vietnam's **16 UNESCO-inscribed intangible cultural heritages** and **39 national treasures** — where heritage meets technology.

From the responsive harmonies of **Bắc Ninh Quan họ singing** to the rustic cadence of **Nghệ Tĩnh Hò work songs** and the resonance of **Central Highlands Gongs**, this journey connects communities across **5 core genres** (Instrumental, Singing, Belief, Festival, and Craft).

The project was built for the **Build@Hub Hackathon 2026** effort to preserve and democratize access to Vietnamese cultural treasures using modern, cost-efficient AI.

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
- [Frontend Pages](#frontend-pages)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features

### 🗺️ Interactive Heritage Map
- Leaflet-based map with **MarkerCluster** for heritage sites across Vietnam.
- Filter sites by **genre**, **UNESCO status**, or **region**.
- Provincial statistics charts and switchable base tiles (**CartoDB / OpenStreetMap**).
- Open GeoJSON geographical data (`vn_geo.json`) for province boundaries.

### 📦 Heritage & Treasure Archive
- Bilingual archive of **16 intangible cultural heritages** and **39 national treasures**.
- Rich detail pages with images, audio, and 3D models.
- Data sourced from **UNESCO representative archives** and **Prime Ministerial decisions**.

### 🎵 Audio & Vocal Recording
- Built-in audio players for traditional music samples.
- On-page voice recording with comparison analysis against reference samples using the **Web Audio API**.

### 🧊 3D Artifact Viewer
- View 3D artifact models on-page (e.g., the **One Pillar Pagoda**) using a native viewer (**Three.js / Collada**).

### ✦ Tour AI & Route Planning
- **Tour AI** chats to plan heritage itineraries by **budget**, **duration**, **region**, and **interests**.
- Generates a plan with a **map route**, **accommodation links**, and **transport segments**.
- **Trip booking** and **trip sharing** built in.

### 🤖 Heritage Travel Assistant
- A local chatbot suggesting sites and festivals by **region**, **month**, and **interests**.
- **Backend API fallback** (Google Gemini proxy) when online — API key stays server-side.

### 📅 Festival Calendar
- Browse festivals grouped by **Gregorian month** with region filtering.
- Lunar calendar integration for traditional festival dates.

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│              Frontend (Vanilla JS + HTML/CSS)                │
│  Map · Archive · Festivals · Tour AI · Booking · 3D · Audio  │
└─────────────────────────────┬────────────────────────────────┘
                              │ REST
┌─────────────────────────────▼────────────────────────────────┐
│                     Backend (FastAPI)                         │
│  /api/v1/sites  /api/v1/festivals  /api/v1/bookings           │
│  /api/v1/trip/suggest  /api/v1/chat                           │
└───────┬───────────────┬───────────────┬───────────────┬───────┘
        │               │               │               │
        ▼               ▼               ▼               ▼
┌─────────────┐ ┌──────────────┐ ┌────────────┐ ┌──────────────┐
│ SQLite      │ │ Google Gemini│ │ GeoJSON    │ │ Static       │
│ (aiosqlite) │ │ (server-side)│ │ (vn_geo)   │ │ Frontend     │
└─────────────┘ └──────────────┘ └────────────┘ └──────────────┘
```

---

## Tech Stack

**Backend**
- **Language:** Python 3.11+
- **Framework:** FastAPI, Uvicorn
- **ORM / DB:** SQLAlchemy 2.0 (async), SQLite + aiosqlite
- **AI:** Google Gemini (server-side proxy, `gemini-3.1-flash-lite`)
- **HTTP Client:** httpx
- **Config:** pydantic-settings

**Frontend**
- **Framework:** Vanilla JavaScript, HTML5, CSS3
- **Map:** Leaflet + MarkerCluster
- **Tiles:** CartoDB / OpenStreetMap
- **3D:** Three.js / Collada
- **Audio:** Web Audio API
- **i18n:** Bilingual (Vietnamese / English) with localStorage persistence

**Infrastructure**
- Docker (backend containerization)
- Render (deployment)

---

## Repository Layout

```
Viet-Heritage-Map/
├── docker-compose.yml          # Backend service
├── run_local.bat               # One-click Windows local launch
├── backend/
│   ├── app/
│   │   ├── main.py             # FastAPI app entrypoint
│   │   ├── api/v1/             # sites, festivals, booking, trip, chat
│   │   ├── core/               # config, database
│   │   ├── data/               # festivals.json, treasures.json
│   │   ├── models/             # SQLAlchemy models (site, booking)
│   │   ├── schemas/            # Pydantic schemas
│   │   └── services/           # trip_planner
│   ├── requirements.txt
│   ├── Dockerfile / Dockerfile.prod
│   └── render.yaml
├── Project/                    # Static frontend (served by FastAPI)
│   ├── index.html              # Home
│   ├── VNMT.html               # Interactive heritage map
│   ├── database.html           # Heritage & treasure archive
│   ├── festivals.html          # Festival calendar
│   ├── journey.html            # Heritage journey
│   ├── planner.html            # Tour AI planner
│   ├── booking.html            # Trip booking
│   ├── tour_booking.html       # Tour booking wizard
│   ├── about.html              # About the project
│   ├── shop.html               # Shop
│   ├── site.html               # Site detail
│   ├── treasure.html           # Treasure detail
│   ├── artifact.html           # 3D artifact viewer
│   ├── lunar-calendar.html     # Lunar calendar
│   ├── vn_geo.json             # Province GeoJSON data
│   ├── PROVINCES.geojson       # Province boundaries
│   ├── data.js                 # Heritage data
│   ├── inheritable_data.js     # Shared data
│   ├── location_en.js          # English location data
│   ├── journey_sites.js        # Journey site data
│   ├── national_treasures.js   # National treasures data
│   ├── VNMT.js                 # Map logic
│   ├── planner.js              # Tour AI planner logic
│   ├── planner-plan.js         # Plan rendering
│   ├── vnmt-itinerary.js       # Itinerary logic
│   ├── chatbot.js              # Local chatbot
│   ├── about.js                # About page content (bilingual)
│   ├── audio/                  # Audio assets
│   ├── images/                 # Image assets
│   ├── chua_mot_cot/           # One Pillar Pagoda 3D model
│   └── slider/                 # Slider assets
└── docs/                       # Documentation
```

---

## Prerequisites

- **Python** 3.11+
- **Git**
- (Optional) **Docker** for containerized deployment

---

## Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/bin-nguyen-coder/Viet-Heritage-Map.git
cd Viet-Heritage-Map
```

2. **Backend setup**

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

3. **Run the backend** (serves both API and static frontend)

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

4. **Open the app**

- Frontend: `http://localhost:8000`
- API docs: `http://localhost:8000/docs`

> 💡 On Windows you can also double-click `run_local.bat` for a guided launch.

---

## Environment Variables

Create `backend/.env` from `backend/.env.example`.

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_NAME` | Public API name | `VietHeritage Map API` |
| `APP_VERSION` | API version | `0.1.0` |
| `DEBUG` | Enable docs/reload | `true` |
| `API_V1_PREFIX` | API route prefix | `/api/v1` |
| `DATABASE_URL` | SQLite connection | `sqlite+aiosqlite:///./vietheritage.db` |
| `GEMINI_API_KEY` | Google Gemini API key (server-side) | *(empty — set in .env)* |
| `GEMINI_MODEL` | Gemini chat model | `gemini-3.1-flash-lite` |
| `CORS_ORIGINS` | Allowed origins | `[http://localhost:5173, ...]` |
| `LOG_LEVEL` | Logging level | `INFO` |
| `IS_PRODUCTION` | Production mode flag | `false` |

> **Note:** The `GEMINI_API_KEY` is kept **server-side only** — it is never exposed to the browser. The local chatbot works without it; the Gemini proxy is used as an online fallback.

---

## Running the Services

### Start the backend

```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Initialize the database

The database is initialized automatically on startup (`init_db` in the FastAPI lifespan). The SQLite file (`vietheritage.db`) is created in the `backend/` directory.

---

## API Reference

Base URL: `http://localhost:8000/api/v1`

### Sites

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/sites` | List heritage sites (optional `?layer=` filter) |
| `GET` | `/sites/{site_id}` | Get site details |

```bash
curl "http://localhost:8000/api/v1/sites?layer=B%E1%BA%AFc%20B%E1%BB%99"
curl "http://localhost:8000/api/v1/sites/abc-123"
```

### Festivals

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/festivals` | List festivals (optional `?month=` / `?region=` filter) |
| `GET` | `/festivals/months` | Festivals grouped by Gregorian month |

```bash
curl "http://localhost:8000/api/v1/festivals?month=3&region=north"
curl "http://localhost:8000/api/v1/festivals/months"
```

### Bookings

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/bookings` | Create a trip booking |
| `GET` | `/bookings` | List all bookings |

```bash
curl -X POST http://localhost:8000/api/v1/bookings \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Nguyen Van A","email":"a@example.com","travelers":2,"region":"north"}'
```

### Trip Suggestions

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/trip/suggest` | Suggest sites + festivals from date/region/interests |

```bash
curl -X POST http://localhost:8000/api/v1/trip/suggest \
  -H "Content-Type: application/json" \
  -d '{"start_date":"2026-09-01","region":"central","interests":["heritage","music"],"lang":"vi"}'
```

### AI Tour Curator Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/chat` | Chat with the AI Tour Curator (Google Gemini proxy) |

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","text":"Gợi ý tour 3 ngày ở Huế"}]}'
```

### Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | API health status |

---

## Frontend Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page |
| Heritage Map | `VNMT.html` | Interactive Leaflet map with filters |
| Archive | `database.html` | Bilingual heritage & treasure archive |
| Festivals | `festivals.html` | Festival calendar by month |
| Journey | `journey.html` | Heritage journey explorer |
| Tour AI | `planner.html` | AI-powered itinerary planner |
| Booking | `booking.html` / `tour_booking.html` | Trip booking wizard |
| About | `about.html` | Project info, values, team, sources |
| Shop | `shop.html` | Merchandise shop |
| Site Detail | `site.html` | Individual heritage site page |
| Treasure | `treasure.html` | National treasure detail |
| Artifact 3D | `artifact.html` | 3D artifact viewer |
| Lunar Calendar | `lunar-calendar.html` | Traditional lunar calendar |

All pages support **bilingual (Vietnamese / English)** toggling with persistence via `localStorage`.

---

## Deployment

The application is deployed as a single service on Render:

- **Web** → [Render](add later) (`render.yaml`, `backend/Dockerfile.prod`)
  - Full-stack deployment (FastAPI serves the static frontend from `Project/`)
  - Production database: SQLite (`vietheritage.db`)
  - `GEMINI_API_KEY` configured server-side in `backend/render.yaml`
  - No separate frontend deployment needed — API and static files served together

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. Install dev dependencies:

```bash
cd backend
pip install -e ".[dev]"
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
  <em>LimitlessX · VietHeritage — Preserving Vietnamese heritage, one story at a time.</em>
</p>