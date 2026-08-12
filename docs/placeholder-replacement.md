# Placeholder Replacement Guide

## ONNX Model

Replace `backend/models/ethnomusic_net_int8.onnx` with a trained EthnoMusicNet checkpoint.

Required contract:
- Input name: `input`, shape `[1, 1, 128, T]` (dynamic time dimension)
- Outputs:
  - `genre_logits`: `[1, 5]`
  - `instrument_probs`: `[1, 12]`
  - `technique_probs`: `[1, 10]`
  - `confidence`: `[1, 1]`

If changing the path, update `ETHNOMUSIC_MODEL_PATH` in `backend/app/core/config.py`.

## Audio Clips

Replace files in `frontend/public/audio/` with real heritage recordings.
Keep filenames consistent with site data configs, or update references in:
- `Project/data.js`
- `Project/inheritable_data.js`

## Database Seed Data

Run the ingestion script once available:
```powershell
cd backend
python scripts/seed_database.py
```

Or manually insert via FastAPI admin endpoints if available.

## Static Frontend Data

Edit these files directly:
- `Project/data.js` — site metadata, locations, descriptions
- `Project/inheritable_data.js` — cultural layer definitions, tagging

## Chatbot

Fallback responses are in `backend/app/api/v1/chat.py` under `# Fallback response`.
Replace with real RAG-lite + Ollama integration by ensuring:
- `OLLAMA_HOST` and `OLLAMA_MODEL` are set in `.env`
- `sqlite-vec` store contains `KnowledgeChunk` records for retrieval