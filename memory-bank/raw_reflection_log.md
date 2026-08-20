# Raw Reflection Log

---
Date: 2026-08-16
TaskRef: "Fix Render deployment for Viet-Heritage-Map"

Learnings:
- Discovered `backend/models` directory does NOT exist; Python models live at `backend/app/models` (a package). Both production Dockerfiles referenced a non-existent `models/` root path, causing build failures in `COPY` instructions.
- Discovered `backend/uv.lock` does NOT exist and `uv` is NOT installed locally. `uv sync --frozen` fails without a lockfile. `uv sync` (non-frozen) also fails when the builder only has `pyproject.toml` and no app source, because uv tries to build/install the project package with setuptools.
- The reliable approach: install runtime deps directly from `requirements.txt` into a venv (`uv venv && uv pip install -r requirements.txt`) instead of `uv sync` on a project. This avoids both the missing lockfile and missing-package-source problems.
- `uv run uvicorn` requires a project context (pyproject.toml); when the build installs into a plain venv (no project), the CMD must invoke the venv binary directly (`/app/.venv/bin/uvicorn`) to avoid failure.
- `backend/render.yaml` + `backend/Dockerfile.prod` was fundamentally broken: `Dockerfile.prod` did `COPY ../Project` which escapes the build context (dockerContext: backend). Fixed by pointing backend/render.yaml to the root Dockerfile with root context (`../Dockerfile`, `dockerContext: ..`).
- The root `render.yaml` + root `Dockerfile` is the canonical, documented deploy path (per DEPLOYMENT.md). The backend/ duplicate was redundant and broken.

Difficulties:
- PowerShell doesn't accept `&&` as a separator (uses `;`).
- `uv` is not installed locally, so a lockfile could not be generated; switched build to requirements.txt.
- `docker` is not installed locally, so a local image build could not verify the changes; relied on the Render cloud build.

Successes:
- Minimal, surgical fixes to two files (Dockerfile, backend/render.yaml) resolved all build blockers.
- Diagnosed the runtime failure `exec /app/.venv/bin/uvicorn: no such file or directory` as the classic multi-stage venv relocation problem: the venv was created in /build then copied to /app, leaving entrypoint shebangs pointing to the non-existent /build/.venv/bin/python. Fixed by switching to a single-stage pip install into system Python (uvicorn lands in /usr/local/bin, no relocation needed).
- Diagnosed then startup failure `sqlite3.OperationalError: unable to open database file` in app/core/database.py init_db: the container runs as non-root appuser but /app (WORKDIR) is owned by root, so the SQLite file `/app/vietheritage.db` could not be created. Fixed by adding `RUN chown -R appuser:appuser /app` to the Dockerfile.
- NOTED: config.py `database_url` property returns hardcoded SQLite `DATABASE_URL_PROD` when IS_PRODUCTION=true, ignoring the env `DATABASE_URL` (which Render populates with Postgres). The provisioned Render Postgres DB is therefore unused; app uses ephemeral SQLite. Chose the minimal SQLite fix per user's "do not change more than necessary" constraint; switching to Postgres would require adding asyncpg + config normalization (a larger change).

Improvements_Identified_For_Consolidation:
- General pattern: When a project lacks a committed lockfile and the Dockerfile references a source-less project via `uv sync --frozen`, prefer installing from an explicit `requirements.txt` into a venv.
- General pattern: When the runtime uses a plain venv (no project), invoke the venv's executable directly (`/app/.venv/bin/<bin>`) rather than `uv run <bin>`.
- Viet-Heritage-Map specifics: render.yaml + Dockerfile at repo root is the deployment entry; backend/Dockerfile.prod & backend/render.yaml were broken duplicates.
- Viet-Heritage-Map: local tooling gap (no uv, no docker on dev machine) — changes must be verifiable by the Render cloud build.
---
Date: 2026-08-16
TaskRef: "Add VR360 popup button to all headers"

Learnings:
- All 14 HTML pages in Project/ share a common `.nav-right` container in their `<nav>` header, except VNMT.html which uses a `<header>` with `.lang-toggle` instead of `<nav>`.
- A single shared JS file (`vr360-popup.js`) can inject both the button and the modal into every page — no per-page HTML edits needed beyond one `<script>` tag before `</body>`.
- The booking.com iframe pattern in tour_booking.html uses an iframe with `referrerpolicy="no-referrer"` and a fallback link note; the VR360 popup follows the same pattern.
- PowerShell on this machine does not accept `&&` as a command separator (uses `;`), and `grep`/`findstr` are unreliable — use `node -e` for file manipulation.

Difficulties:
- The `write_to_file` tool output was accidentally appended to the saved file content (the `</write_to_file>` and `<task_progress>` XML leaked into the file), causing TS syntax errors. Fixed by removing the trailing lines.
- Shell escaping of quotes in `node -e` inline commands broke; resolved by writing a temporary `.js` script file, running it, then deleting it.

Successes:
- The shared-component approach (CSS + button + modal all injected by one JS file) required only a single `<script>` tag per page — minimal, surgical changes.
- Verified all 14 HTML files have the script tag and the JS passes `node --check`.

Improvements_Identified_For_Consolidation:
- General pattern: For cross-page UI components, prefer a single shared JS file that injects styles + DOM, added via one `<script>` tag per page, over editing each page's markup.
- General pattern: When a page uses a different header structure (e.g., `<header>` vs `<nav>`), the shared JS should query multiple selectors (`.nav-right` OR `header .lang-toggle`) to find the insertion point.
- Viet-Heritage-Map: Use `node -e` or temporary `.js` scripts for batch file edits; avoid `grep`/`findstr`/`&&` in PowerShell.
---
Date: 2026-08-20
TaskRef: "Locate file for editing visual of GIỚI THIỆU navbar"

Learnings:
- The "GIỚI THIỆU" page is `Project/about.html`. Its navbar visual (CSS) lives in the inline `<style>` block at lines 33–68 under `/* ── NAV ── */`, with nav color variables (`--nav-bg`, `--nav-gold`, `--nav-muted`, `--nav-text`) declared in `:root` at lines 20–24.
- Navbar text labels (e.g., "Giới thiệu") are NOT hardcoded in HTML — they are rendered by `applyLang()` in `about.js` via `ABOUT_CONTENT.nav[lang]`. Changing nav label text requires editing `Project/about.js`, not `about.html`.
- Confirmed line 42 sets `.nav-links a { font-size:8px }` in about.html (highlighted as the cause of tiny nav link text from the earlier font-size reduction task).

Difficulties:
- Users often assume all navbar content (text + visual) is edited in one HTML file; text is actually JS-driven.

Successes:
- Quickly pinpointed exact line ranges for nav CSS vs. nav HTML vs. JS-rendered text in about.html.

Improvements_Identified_For_Consolidation:
- Viet-Heritage-Map: For any page, navbar visual = inline `<style>` `/* ── NAV ── */` + `:root` nav variables; navbar text = JS (`ABOUT_CONTENT.nav`, `*_content.js` / page JS `getContent`/`applyLang`). Do not search HTML for visible nav link text.
---
Date: 2026-08-20
TaskRef: "Reduce nav font-size to 8px and button padding to 5px 10px across all Project pages"

Learnings:
- All 12 HTML files in Project/ (except VNMT.html) plus planner.css share nearly identical inline CSS nav styles: `.nav-links a` (font-size:11px), `.lang-btn` (padding:4px 12px), `.nav-ai-btn` (padding:8px 16px|18px), `.nav-map-btn` (padding:8px 16px|18px). shop.html additionally defines `.nav-cart` (padding:8px 18px).
- tour_booking.html is the only page without `.lang-btn`/`lang-toggle` in its nav CSS.
- The VR 360 button is not in any page's HTML or CSS — it's dynamically injected by `vr360-popup.js` via a `.vr360-btn` CSS rule with `padding:7px 14px`.
- Padding variations exist: some files use `8px 16px` (booking.html, festivals.html, tour_booking.html), others use `8px 18px` (index.html, about.html, journey.html, database.html, lunar-calendar.html, shop.html, site.html, artifact.html, treasure.html, planner.css).
- Formatting varies: some files use inline CSS (one-line rules), others use multi-line expanded rules, some use `.nav-links a{` (no space) and others `.nav-links a {` (with space).

Difficulties:
- No `python`/`python3` available on Windows; used `node -e` instead for batch CSS modification.
- PowerShell doesn't accept `&&` as a separator; avoided by using single-command scripts.
- The regex approach needed to be carefully scoped: `[^}]*?` ensures matching stays within the correct CSS block (e.g., `.lang-btn` vs `.lang-btn:hover`), and `\.selector\s*\{` prevents matching sub-selectors like `.nav-ai-btn:hover`.

Successes:
- A single Node.js script using regex with CSS-block-scoped patterns made all 69 changes across 14 files in one pass: 13 font-size changes (`.nav-links a` 11px→8px), 37 padding changes (`.lang-btn`/`.nav-ai-btn`/`.nav-map-btn`/`.nav-cart`→5px 10px), 1 vr360-btn change.
- Verified with search_files: 0 remaining old values, 15+ correct new `font-size:8px` matches in `.nav-links a` blocks, 42+ correct `padding:5px 10px` matches across all selectors.

Improvements_Identified_For_Consolidation:
- General pattern: When batch-modifying inline CSS across many HTML files, use a regex-based script with CSS-block scoping (`selector { ... }`) to target specific properties without affecting other rules. The pattern `/(selector\s*\{[^}]*?)property:oldvalue/` with a capture group and replacement function is reliable for single-line and multi-line CSS.
 - Viet-Heritage-Map: nav CSS is duplicated across all 12 HTML files + planner.css (13 copies of nearly-identical rules). A future improvement would be extracting shared nav CSS into a single stylesheet to avoid this duplication.
 - Viet-Heritage-Map: The VR 360 button (`.vr360-btn`) is injected via JS, not in HTML/CSS files — when styling it, check `vr360-popup.js` for dynamically-injected CSS rules.
---
Date: 2026-08-20
TaskRef: "Synchronize Navbar across all non-map pages using Project/about.html as SSOT"

Learnings:
- The `Project/about.html` `<nav>` markup is the canonical SSOT: `<nav id="main-nav">` > `.nav-logo` + `.nav-links` (8 items, `flex:1; justify-content:center`, gap:32px) + `.nav-right` (`.lang-toggle` + `.nav-ai-btn` gold + `.nav-map-btn` burgundy `#7a1f1f`).
- Each non-map page carries its own inline nav CSS (`<style>` `/* ── NAV ── */`) OR an external sheet (planner.html → planner.css). There is no shared nav stylesheet.
- Root cause of "CỬA HÀNG overlaps VI|EN" overlap: `.nav-links` used `position:absolute; left:50%; transform:translateX(-50%)` on pages. Fix: `flex:1; justify-content:center`.
- Root cause of "MỞ BẢN ĐỒ" appearing black: `--red: #1c1c1c` token on index.html, festivals.html, tour_booking.html, planner.css. SSOT value is `#7a1f1f`.
- Button shape drift: booking.html & festivals.html used `border-radius:20px` (pill) on `.nav-map-btn`/`.nav-ai-btn`; SSOT uses `border-radius:4px`. Simplified via `display:inline-flex`/`gap:7px`.
- Some pages had a redundant "Tour AI" `<li>` in the center menu (tour_booking.html, planner.html) in addition to the gold `.nav-ai-btn`; both removed to match SSOT.
- tour_booking.html lacked the entire `.lang-toggle`/`.lang-btn` block; it was added to match SSOT.
- shop.html has a page-specific `.nav-cart` button whose DOM+JS is re-quired for the cart (`$('cart-cart-btn')`, `renderCartCount`); it was deliberately kept — not part of SSOT sync.
- logo text ("VietHeritage Map" → "Bảo Vật Việt") is hardcoded inside the `.nav-logo` span in HTML (not JS-driven) — unlike nav link labels which are JS-driven.

Difficulties:
- Large inline scripts make `python -c` batch scans time out (30s); use `search_files` with targeted regex instead for verification.
- Formatting differs (compact one-line CSS vs multi-line), so each file needed a distinct SEARCH/REPLACE block.

Successes:
- Used targeted `replace_in_file` per page (figures file edits) — surgical, no cross-file scripted rewrites that could corrupt page-specific sections.
- Verified: 0 occurrences of `--red: #1c1c1c`; 0 `.nav-links ... position:absolute`; 0 `<li><a...>Tour AI</a></li>` dupes; 0 "VietHeritage Map" logo spans remain in any HTML file.

Improvements_Identified_For_Consolidation:
- General pattern: When normalizing repeated navbar markup across many pages, treat the SSOT as a feature: fixed DOM structure + classes + tokens (colors, gap, radius). Replace per-page, don't sprinkle overrides.
- General pattern: Prefer `flex:1; justify-content:center` over `position:absolute; translate(-50%)` for centered nav link lists inside a 3-column flex header to avoid overlap with `.LOGO` and `.nav-right` controls.
  - Viet-Heritage-Map: planner.css + 12 inline `<style>` blocks duplicate nav CSS; a shared `nav.css` would serve as the real SSOT for behavior as well as markup.
---
Date: 2026-08-21
TaskRef: "Lock Navbar Brand Name to 'VietHeritage Map'"

Learnings:
- The navbar brand/logo text is hardcoded in each page's HTML inside the `.nav-logo` span (either `<span id="nav-logo-text">` or a plain `<span>` in treasure.html). It is NOT JS-driven on most pages.
- Only about.html's inline `applyLang()` explicitly sets the logo text, and it already hardcodes `'VietHeritage Map'` for BOTH languages (`lang === 'vi' ? 'VietHeritage Map' : 'VietHeritage Map'`), so no JS bypass was needed there.
- No JS file contains "Bảo Vật Việt", confirming no i18n dictionary translates the navbar brand.
- Remaining "Bảo Vật Việt" occurrences (about.html hero title + features heading, treasure.html `document.title`) are page content/browser title, NOT the navbar brand — out of scope for this task.

Difficulties:
- treasure.html uses a plain `<span>` (no id) for the logo, so it required a different SEARCH pattern than the other pages.

Successes:
- Replaced the navbar brand text in all 13 HTML files (index, about, artifact, database, festivals, journey, lunar-calendar, booking, planner, shop, site, tour_booking, treasure).
- Verified via search_files: 0 navbar-brand "Bảo Vật Việt" instances remain; 0 JS files contain "Bảo Vật Việt".

Improvements_Identified_For_Consolidation:
- Viet-Heritage-Map: The navbar brand text is duplicated across 13 HTML files. A shared include/partial or JS-injected brand would prevent future drift. When changing the brand, search for both `nav-logo-text">` and plain `<span>Bảo Vật Việt</span>` patterns.
- General pattern: When a task says "never translate X", verify both the HTML hardcoded value AND any JS `applyLang()`/dictionary that might overwrite it. Here only about.html touched the logo, and it was already locked to the desired value.
