# P1 (Lead) - Backend + Infra + AI Orchestration

**Status**: ✅ Foundational work complete. Remaining: deploy & verify.

## Completed
- [x] Git repo + docker-compose.yml (Postgres, Ollama Qwen2.5, MinIO)
- [x] FastAPI scaffold (config, database, models, schemas, routers)
- [x] Sites API (`GET /api/v1/sites`, `GET /api/v1/sites/{id}`)
- [x] Artisan API (`POST /api/v1/artisan/ask`) - RAG-lite + Ollama
- [x] Audio API (`POST /api/v1/audio/analyze`) - ONNX Runtime
- [x] Monitoring: Sentry, health check, model health, cache stats
- [x] Caching: In-memory TTL cache with `@cached` decorator
- [x] Dockerfiles: dev + multi-stage prod (baked Ollama + ONNX)
- [x] Deploy configs: render.yaml, vercel.json, netlify.toml
- [x] Air-gapped: sentry_sdk optional import, no crash on missing deps
- [x] Error handlers: HTTPException, ValueError, generic Exception

## Remaining Tasks

### Deploy to Render
1. Create Render account if not exists
2. Connect GitHub repo
3. Deploy from `backend/Dockerfile.prod`
4. Set env vars per `backend/render.yaml`
5. Test `GET /health` → 200
6. Test `GET /api/v1/sites` → 200 with 5 sites

### Deploy to Netlify (frontend)
1. Connect frontend repo to Netlify
2. Set build: `npm run build`, publish: `dist`
3. Set env var: `VITE_API_URL=https://vietheritage-api.onrender.com`

### GPU Orchestration
1. Get FPT AI Factory SSH credentials
2. Give P4 access for EthnoMusicNet training (8h)
3. Give P4 access for embedding fine-tune (4h)
4. Verify ONNX model export at `backend/models/ethnomusic_net_int8.onnx`

### CI/CD
1. Add GitHub Actions for lint + test on PR
2. Add auto-deploy to Render on `main` push
3. Add auto-deploy to Netlify on `main` push

**No API keys or user inputs needed at this stage.**