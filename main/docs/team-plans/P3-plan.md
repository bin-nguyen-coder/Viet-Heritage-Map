# P3 (FE2) - Artisan + Analyzer + UI

**Status**: 📋 Ready to start. Foundation complete.

## Frontend Foundation (already done)
- [x] React 18 + TypeScript + Vite + Tailwind
- [x] Design tokens matching VietnamTales palette
- [x] Component primitives (btn, card, input, badge, waveform)
- [x] Router setup
- [x] API proxy configured

## Tasks (48h timeline)

### Hours 0-4: Artisan Chat UI
1. Build `ArtisanChat.tsx` in `frontend/src/pages/ArtisanChat.tsx`:
   - Message list (scrollable, auto-scroll on new)
   - Text input with send button (max 500 chars)
   - Chat bubble styles: user (indigo) / assistant (rice-paper)
   - Typing indicator while waiting for API
   - Persona avatar + name at top
2. Build `components/artisan/MessageBubble.tsx`:
   - Support citations (expandable `<details>`)
   - Support confidence indicator (color-coded dot)
   - Support "I don't know" state with citation section
   - Support audio playback if `audio_url` present

### Hours 4-8: Artisan Integration
1. Wire up `POST /api/v1/artisan/ask`:
   - Send `{question, persona_id, lang}`
   - Handle 404 (persona not found) → show error
   - Handle 503 (LLM unavailable) → show "temporarily unavailable"
   - Display response with citations
2. Pre-recorded response flow:
   - When response has `audio_url`, show play button
   - Cache recent responses in Zustand store

### Hours 8-12: Audio Analyzer UI
1. Build `AudioAnalyzer.tsx` in `frontend/src/pages/AudioAnalyzer.tsx`:
   - Drag-drop upload zone (styled with heritage-gold border)
   - File input fallback
   - File type validation (wav, mp3, m4a only)
   - File size limit display (10MB)
2. Build `components/audio/UploadZone.tsx`:
   - Visual feedback on drag (border glow)
   - Progress bar while uploading
   - Error display for invalid files

### Hours 12-16: Analysis Results Display
1. Build `components/audio/AnalysisResult.tsx`:
   - Genre card: label + confidence bar + all_scores breakdown
   - Instruments card: detected list + confidence bars
   - Techniques card: detected list + confidence bars
   - Ornament timeline: time-stamped event list with confidence
2. Waveform visualization:
   - Render waveform from returned data URL
   - Animate on play
   - Show ornament markers on timeline

### Hours 16-20: Language Switcher
1. Build `components/ui/LanguageSwitcher.tsx`:
   - VI / EN toggle button
   - Persist selection in localStorage
   - All UI text uses translation keys
2. Create `src/utils/i18n.ts`:
   - Simple translation dictionary
   - All user-facing strings in both VI and EN
   - Fallback to VI if key missing in EN

### Hours 20-24: Accessibility & Polish
1. Accessibility:
   - Focus states on all interactive elements
   - Screen reader labels for audio controls
   - Keyboard nav for chat
   - Color contrast check (WCAG AA)
2. Error boundaries for both pages
3. Loading skeletons for analysis results
4. Empty states (no messages yet, no file uploaded)

### Day 2: Integration + Polish
1. E2E Artisan flow: ask question → see response → play audio
2. E2E Analyzer flow: upload → see results → explore ornament timeline
3. Cross-browser test (Chrome, Firefox, Safari iOS)
4. Performance: lazy load audio visualizer, memoize components

## Key Files to Edit
- `frontend/src/pages/ArtisanChat.tsx`
- `frontend/src/pages/AudioAnalyzer.tsx`
- `frontend/src/components/artisan/MessageBubble.tsx`
- `frontend/src/components/audio/UploadZone.tsx`
- `frontend/src/components/audio/AnalysisResult.tsx`
- `frontend/src/components/ui/LanguageSwitcher.tsx`
- `frontend/src/utils/i18n.ts`
- `frontend/src/services/api.ts`

## API Dependencies
- `POST /api/v1/artisan/ask` — P1 built it
- `POST /api/v1/audio/analyze` — P1 built it (needs ONNX model from P4)