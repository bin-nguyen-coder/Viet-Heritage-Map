# P5 (AI2) - RAG-lite + Data + Backend

**Status**: 📋 Ready to start. Foundation complete.

## What P1 Built for You
- `scripts/seed_database.py` — seed script with sample 9 knowledge chunks + 6 pre-recorded responses
- `HeritageRAGLite` service in `backend/app/services/rag_lite.py`:
  - Keyword search → few-shot → Ollama Qwen2.5
  - Pre-recorded response cache (exact/partial match)
  - "I don't know" with elder citations when confidence < 0.6
  - VI/EN support
- Database model: `KnowledgeChunk`, `ArtisanResponse`, `ArtisanPersona`

## Tasks (48h timeline)

### Hours 0-3: Knowledge Curation (50+ chunks)
Create 50 knowledge chunks covering all 5 hero sites, saved in `scripts/seed_database.py`. Categories per SPEC §2.1:
- **history** (10) — origins, historical context
- **technique** (10) — singing/instrument techniques, ornament names
- **meaning** (10) — cultural significance, symbolism
- **ritual** (10) — ceremonies, festivals, practices
- **lyrics** (5) — sample lyrics with translation
- **general** (5) — miscellaneous cultural context

For each chunk, include:
```python
{
    "site_id": "uuid-of-site",
    "artisan_persona_id": "uuid-of-persona",
    "category": "history",
    "content_vi": "...",  # Vietnamese content
    "content_en": "...",  # English translation
    "source_type": "interview|document|recording|unesco|academic",
    "verified_by": "Elder/Expert name",
    "verified_at": "2024-01-15",
}
```
Reference the existing 9 chunks in `scripts/seed_database.py` for format.

### Hours 3-6: Pre-recorded Responses (10+)
Create pre-recorded responses for the most common questions. Each tells the LLM what to say without needing Ollama:
```python
{
    "persona_id": "artisan-uuid",
    "question_intent": "origin of quan ho",  # canonical key
    "question_vi": "Quan họ bắt nguồn từ đâu?",
    "question_en": "Where does Quan họ originate from?",
    "answer_vi": "...",
    "answer_en": "...",
    "audio_url_vi": "/audio/response-quan-ho-origin-vi.mp3",
    "audio_url_en": "/audio/response-quan-ho-origin-en.mp3",
    "confidence": 1.0,
    "citations": ["chunk-uuid"],
}
```
Plan 2 per persona = 10 total. Include:
1. Quan họ: origin, betel meaning
2. Ca trù: instruments, performance style
3. Nhã nhạc: number of modes, court rituals
4. Đờn ca tài tử: improvisation, instruments
5. Hò: types, lyrics style

### Hours 6-10: Trick Questions & "I Don't Know"
Curate 5 trick questions that should trigger "I don't know" with citation:
1. "Ai là vua cuối cùng của nhà Hồ?" (about a different dynasty)
2. "Trống đồng Đông Sơn có từ thế kỷ nào?" (about artifacts, not music)
3. "Giá vé tham quan di tích là bao nhiêu?" (practical/logistical)
4. "So sánh Quan họ với nhạc Pop Hàn Quốc" (cross-culture comparison)
5. "Nghệ nhân nào nổi tiếng nhất hiện nay?" (subjective/personal)

Verify each triggers `confidence < 0.6` → "I don't know" fallback.

### Hours 10-14: Audio Clips Recording
Record/gather 10 audio clips:
- 5 genre previews (30s each): one per hero site
- 5 artisan voice samples (15s each): one per persona
- Sources: YouTube Audio Library (CC licensed Vietnamese traditional music), team phone recordings
- Convert to .mp3 (128kbps), save in `frontend/public/audio/`
- Update seed data to reference correct URLs

### Hours 14-18: TTS Response Recording
Record 10 TTS responses (matching pre-recorded responses above):
- Team member reads answers in Vietnamese
- Save as .mp3 in `frontend/public/audio/`
- Name pattern: `response-{intent}-{lang}.mp3`
- Reference in `artisan_responses.audio_url_vi` / `audio_url_en`

### Hours 18-24: Content Review & Seed
1. Re-run `python scripts/seed_database.py` with all new data
2. Verify artisanal content with team (cultural sensitivity)
3. Fix any inaccuracies in content_vi/content_en
4. Verify all 5 sites have at least 5 chunks each
5. Test via `POST /api/v1/artisan/ask`:
   - 5 valid questions → correct answers
   - 2 trick questions → "I don't know" with citations

### Day 2: Polish
1. Cross-browser verify all audio files play
2. Content parity: every chunk has both VI and EN
3. Elder citation format consistent (name, date)
4. Cultural advisor review notes in `docs/cultural-advisory.md`

## Key Files
- `backend/scripts/seed_database.py` — add chunks and responses here
- `frontend/public/audio/` — save .mp3 files here
- `docs/cultural-advisory.md` — cultural notes

## Needs from Team
- Docker running (`docker-compose up -d postgres ollama`) for seed + test
- Approval from team on cultural accuracy
- P1 to run seed script after you update it