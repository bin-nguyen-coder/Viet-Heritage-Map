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
