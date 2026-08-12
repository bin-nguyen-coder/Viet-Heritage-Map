# Deployment Guide - VietHeritage

## 🚀 Deploy to Render (OpenRouter + Chatbot)

The backend uses **OpenRouter** for cloud LLM inference ($0-cost tier available). The chatbot is served from the legacy frontend and connects to the FastAPI backend for chat functionality.

### Key Features
- Chatbot widget in `Project/index.html` uses `window.location.origin` for API endpoint (works in production)
- Project frontend is served at root `/` in production

### Pre-deployment Checklist

- [x] `Dockerfile` - Multi-stage build with frontend + backend
- [x] `render.yaml` - Configured for free-tier Render deployment
- [x] `backend/app/data/treasures.json` - Heritage data loaded at runtime
- [x] `backend/.env.example` - Environment variable template

### Step 1: Configure Environment Variables

Add your OpenRouter API key to Render:

1. Go to [OpenRouter](https://openrouter.ai) and get a free API key
2. In Render dashboard, add environment variable:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: Your API key from OpenRouter

### Step 2: Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Create New → Web Service
3. Connect your GitHub repo (`PearTr0191/aegisai_vaic-26`)
4. Set configuration:
   - **Name**: `vietheritage` (or custom name)
   - **Region**: Singapore
   - **Plan**: Free
   - **Dockerfile Path**: `Dockerfile`
   - **Docker Context**: `.`

### Step 3: Verify Deployment

After deployment, check:
- `https://aegisai-vaic-26.onrender.com/health` - Should return `{"status": "healthy"}`
- `https://aegisai-vaic-26.onrender.com/api/v1/chat` - Chat endpoint available

### Step 4: Test the Chatbot

1. Visit `https://aegisai-vaic-26.onrender.com/` (homepage with chatbot)
2. Click the "AI Bảo tàng Số" button to open the chat widget
3. The chatbot should connect automatically and show "Ready" status

---

## 🔧 Local Development

```bash
# Setup
cd backend
cp .env.example .env
# Edit .env with OPENROUTER_API_KEY if using LLM features

# Install dependencies
uv sync

# Start API (with uvicorn)
uv run uvicorn app.main:app --reload
```

The chatbot widget expects the backend at `http://localhost:8000`.

---

## Architecture

```
[FastAPI on Render (Dockerfile)]
├── Project frontend (chatbot at /)
│   └── Chatbot widget → /api/v1/chat
├── SQLite database (or Postgres via DATABASE_URL)
└── OpenRouter API (cloud LLM)
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/v1/chat` | POST | Chat with heritage knowledge |
| `/api/v1/chat/voice` | POST | Voice chat with transcription |
| `/api/v1/recommend` | POST | MCQ heritage recommendations |
| `/api/v1/recommend/questions` | GET | Get MCQ questions |

---

## Troubleshooting

**Chatbot shows "Offline" status:**
- Verify `OPENROUTER_API_KEY` is set in Render dashboard
- Check Render logs for errors

**Build fails:**
- Ensure `backend/uv.lock` exists (run `uv lock` in backend/)
- Check that all required files are committed to git

**Chatbot not loading:**
- Verify health check passes at `/health`
- Check browser console for CORS or connection errors

**No LLM response:**
- The grounded chat service (`grounded_chat_service`) works without API key
- Small talk requires `OPENROUTER_API_KEY`