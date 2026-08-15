/* ═══════════════════════════════════════════════════════════
   TOUR PLANNER — CONFIG
   ═══════════════════════════════════════════════════════════
   The Gemini API key is now held SERVER-SIDE in the backend
   (backend/.env → GEMINI_API_KEY). The browser never sees it.

   The planner page calls POST /api/v1/chat, which the FastAPI
   backend proxies to Google Gemini. If the backend is not
   running, the page falls back to a local demo mode.

   To run:
     1. cd backend
     2. pip install -r requirements.txt
     3. set GEMINI_API_KEY in backend/.env
     4. uvicorn app.main:app --reload
     5. open http://127.0.0.1:8000/planner.html
   ═══════════════════════════════════════════════════════════ */