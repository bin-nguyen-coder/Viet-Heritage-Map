# P2 (FE1) - Map + SiteDetail + UI

**Status**: 📋 Ready to start. Foundation complete.

## Frontend Foundation (already done)
- [x] React 18 + TypeScript + Vite + Tailwind
- [x] VietnamTales design tokens (globals.css + tailwind.config.js)
- [x] Component primitives: btn, card, input, badge, waveform
- [x] Router setup: `/`, `/site/:siteId`, `/artisan/:personaId`, `/analyzer`
- [x] API proxy: `vite.config.ts` → `http://localhost:8000`

## Tasks (48h timeline)

### Hours 0-2: Map Scaffold
1. Install dependencies: `npm install leaflet react-leaflet @types/leaflet`
2. Build `MapView.tsx` in `frontend/src/pages/MapView.tsx`:
   - Leaflet map centered on Vietnam (16.0, 107.5)
   - Load sites from `GET /api/v1/sites`
   - 5 custom markers with heritage-gold icons
   - Custom popup → "View site" button navigates to `/site/${id}`
3. Build `HeritageCard.tsx` in `components/map/HeritageCard.tsx`:
   - Audio-first: waveform on hover, play/pause
   - Card shows: cover image, name_vi/name_en, unesco_status badge
   - Click → navigate to SiteDetail

### Hours 2-6: SiteDetail Page
1. Build `SiteDetail.tsx`:
   - Fetch `GET /api/v1/sites/{id}`
   - Image gallery (cover + images)
   - Audio waveform player (Web Audio API)
   - Metadata: province, heritage_type, unesco_status
   - Cultural layers as badges
2. Integrate `<model-viewer>` for 3D artifact:
   - Install: `npm install @google/model-viewer` (or via CDN)
   - Show artifact model from `site.artifact_model.model_url`
   - Auto-rotate on page load, manual orbit

### Hours 6-12: Map Layers & Polish
1. Story layer toggles:
   - "All", "Resistance Stories", "Delta Lullabies", "Court Music", "Work Songs"
   - Layer filter calls `GET /api/v1/sites?layer=quan_ho`
   - Animated layer transitions
2. Mobile responsiveness:
   - Full-height map on mobile
   - Bottom sheet for site detail instead of page nav
   - Touch-friendly markers

### Hours 12-18: Waveform & Audio
1. HeritageCard waveform:
   - Canvas-based waveform visualization
   - Hover → auto-play audio preview (3s)
   - Animates on play
2. SiteDetail audio player:
   - Full waveform with seek
   - Play/pause, progress bar
   - Multiple audio assets if available

### Hours 18-24: Polish & Test
1. Loading states (skeletons for sites list, site detail)
2. Error boundaries (network failure, model not found)
3. Empty states (no sites in layer, no audio)
4. Test on real mobile (iOS Safari, Chrome Android)
5. Test map → SiteDetail → Artisan flow

### Day 2 (Hours 24-44): Integration + Polish
1. Map → SiteDetail deep linking with shareable URLs
2. Layer animation transitions
3. Performance: lazy load markers, cache tiles
4. Final mobile test

## Key Files to Edit
- `frontend/src/pages/MapView.tsx` — main map
- `frontend/src/pages/SiteDetail.tsx` — site detail
- `frontend/src/components/map/HeritageCard.tsx` — card
- `frontend/src/components/layout/Layout.tsx` — shared layout
- `frontend/src/services/api.ts` — API client

## API Dependencies
- `GET /api/v1/sites` — list sites (no JSON needed, P1 built it)
- `GET /api/v1/sites/{id}` — site detail
- Audio files at `/audio/*.mp3` (P5 will add)
- 3D models at `/models/*.glb` (download from Sketchfab)