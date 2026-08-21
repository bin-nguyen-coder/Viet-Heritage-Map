# Consolidated Learnings

## Viet Heritage Project — Specifics

**Stack:** Static HTML/CSS/JS site (no framework, no build step). Pages in `Project/`.

**Design Tokens (reuse for any new page):**
- `--bg:#0a0900`, `--surface:#110f04`, `--card:#181500`, `--border:#2c2507`
- `--gold:#c9a84c`, `--gold-light:#e8c96a`, `--red-bright:#c42b2b`
- `--text:#e8dfc8`, `--muted:#8a7c5e`, `--white:#f5f0e6`
- Fonts: Playfair Display (headings), DM Sans (body), Merriweather (body when `html.lang-vi`)

**Nav/Footer conventions:** Fixed 62px top nav with Đông Sơn star logo, centered uppercase `.nav-links`, right side `.lang-toggle` (VI/EN) + gold `.nav-ai-btn` (→ planner.html) + red `.nav-map-btn` (→ VNMT.html). Footer: `© 2026 Di sản văn hóa phi vật thể Việt Nam` + `Dữ liệu: UNESCO · Bản đồ: CartoDB / OpenStreetMap`.

**Language toggle:** `localStorage.getItem('vnmt_lang')` default `'vi'`; toggle `html.lang-vi` class to switch Merriweather font.

**Navbar typography (SSOT = about.html):** `.nav-links a { font-size:8px; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; }`; `.lang-btn`/`.nav-ai-btn`/`.nav-map-btn` all `font-size:11px`; `.nav-ai-btn .ai-spark { font-size:12px }`. `nav` background is solid `var(--bg)` (no backdrop-filter); `.nav-links a:hover` uses `--gold` (#c9a84c). **Critical:** every page must include `html.lang-vi { --font-body:'Merriweather',serif; }` right after `:root` — without it, Vietnamese nav text silently falls back to DM Sans (sans-serif) instead of Merriweather (serif). booking.html & festivals.html were missing this rule and were fixed 2026-08-21.

**i18n pattern (index.html):** `UI` object with `vi`/`en`, `setEl(id, val, html)` helper, `applyLang()` sets `document.documentElement.lang` + toggles `lang-vi`. To add a nav button: add HTML element with id, add `navXxx` key to both language objects, add `setEl('nav-xxx-text', s.navXxx)` in applyLang. Nav i18n keys follow the pattern `nav-<id>` element id ↔ `nav<Key>` in UI object (e.g., `nav-lunar` ↔ `navLunar`).

**i18n pattern (planner.js):** own `STR` object with `vi`/`en` + `t(k)` helper. To make a page fully bilingual, wire ALL static texts (page header, chat header, preview panel, footer) into the `apply()` function of `initLangToggle()`.

**Existing chatbot:** `chatbot.js` is a floating FAB widget (not a page). The planner page is a dedicated split-screen page.

## Gemini API Integration (Static Sites)

**Pattern: Config JS file for API keys**
- For static sites with no build step, inject the API key via a small config file (e.g. `planner-config.js`) that sets `window.VITE_GEMINI_API_KEY = ''`, loaded before the main script.
- Always include a demo-mode fallback when no key is configured so the page works immediately.
- For production, move the key to a server-side proxy.

**Gemini `generateContent` REST call shape:**
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=KEY
{
  systemInstruction: { parts: [{ text: SYSTEM }] },
  contents: [ { role: 'user'|'model', parts: [{ text }] } ],  // full history
  generationConfig: { temperature: 0.8, maxOutputTokens: 1024 }
}
```
Response text: `data.candidates[0].content.parts[0].text`.

## Lunar Calendar Feature (Viet-Heritage-Map)

- **lunar-javascript library**: browser build is `node_modules/lunar-javascript/lunar.js`. It is a UMD bundle that exposes `Solar`, `Lunar`, `LunarYear`, `LunarMonth` as global objects when loaded via a plain `<script>` tag. Copied as `Project/lunar-core.js`.
- **Vietnamese Can Chi mapping**: The library returns GanZhi in Chinese characters; map them to Vietnamese via static `CAN`/`CHI` lookup tables before display.
- **Leap months**: `Lunar.getMonth()` returns a negative number for a leap month; use `Math.abs()` and check `< 0`.
- **Date conversion accuracy**: `Solar.fromYmd(y,m,d).getLunar()` and `Lunar.fromYmd(y,m,d,leap).getSolar()` are accurate for years 1200–2199 per Vietnamese lunar rules (UTC+7).

## Navigation & i18n (index.html)

- The homepage `index.html` had **pre-existing unresolved git merge-conflict markers** (`<<<<<<< HEAD` / `=======` / `>>>>>>>`) inside the `UI` i18n object, which caused a JavaScript parse error and broke the language toggle and `applyLang()`. When adding nav items, resolve these carefully.
- **Lesson**: `replace_in_file` SEARCH/REPLACE can be corrupted/duplicated when the target region contains merge-conflict markers and is matched repeatedly. The safe recovery is to rewrite the whole file via `write_to_file` using a clean reconstruction.
- All pages share the `vnmt_lang` localStorage key for language persistence.

## Editing Safety (CRITICAL)

- **NEVER use replace_in_file on a file containing unresolved git merge conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`). The markers make SEARCH matching unreliable and repeated edits progressively corrupt the file (duplicated blocks, orphaned markers).
- **Always restore a clean version first** (via `git checkout -- <file>` or a user-provided clean copy), then re-apply only the intended changes.
- Before editing, verify no conflict markers exist: `search_files` for `<<<<<<<|=======|>>>>>>>`.

## Environment & Workflow (Windows / PowerShell)

- Shell is **PowerShell**, not cmd: `&&` is invalid as a statement separator. Use `;` or separate commands. `cd path` is `Set-Location path`.
- Reliable JS syntax check: `node --check file.js; Write-Output "EXIT:$LASTEXITCODE"` (exit 0 = valid).
- Project static files served/dev-tested from `Project/` directory via `python -m http.server 8000 --directory Project`.