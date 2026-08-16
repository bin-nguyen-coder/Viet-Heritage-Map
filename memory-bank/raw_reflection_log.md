# Raw Reflection Log

<!--
Entries here are initial, detailed reflections. Once consolidated into
`consolidated_learnings.md`, the corresponding content is pruned from this file.

Last consolidation: 2026_08_15 — Tour Planner feedback task (all insights transferred).
-->

---
Date: 2026_08_15
TaskRef: "Resolve GitHub push protection (GCP API key leak) in Viet-Heritage-Map"

Learnings:
- GitHub push protection (GH013) blocks pushes when a secret is present in ANY commit
  reachable from the pushed ref, not just the tip. The error reports the exact commit
  hash and file:line where the secret lives.
- The leaked value was a GCP service-account-bound API key hardcoded in
  `backend/app/core/config.py:40` (GEMINI_API_KEY). It was introduced in unpushed commit
  `b23e418` and carried into merge commit `64e7063`.
- `git log --all -S "<secret>"` is the fastest way to locate which commit(s) introduced a
  secret. `git grep -n -I -e "<secret>" $(git rev-list --all)` scans every tracked blob
  across all history to confirm full removal.
- Because the secret only existed in unpushed commits, the clean fix was a soft reset to
  `origin/main` (`git reset --soft origin/main`), re-staging the corrected file, and
  recommitting — this preserves all working-tree changes while dropping the secret from
  history entirely (no filter-repo needed).
- pydantic-settings `BaseSettings` already loads `backend/.env` via `env_file=".env"`, so
  the correct pattern is `GEMINI_API_KEY: str = ""` in code + real key in gitignored
  `backend/.env`. Local dev keeps working because `backend/.env` already held a valid key.

Difficulties:
- The default shell is PowerShell, not cmd/bash. `&&` chaining failed with
  "Das Token '&&' ist in dieser Version kein gültiges Anweisungstrennzeichen". Switched to
  `;` separators and PowerShell-native `Select-String` instead of `grep`.
- After `git reset --soft`, the staged `config.py` still contained the old secret (staged
  snapshot predates the edit). Had to `git add backend/app/core/config.py` again to stage
  the corrected version.

Successes:
- Soft-reset + recommit approach avoided a full history rewrite (filter-repo/BFG) since the
  secret was never pushed.
- Verified zero secret matches across all history before pushing; push succeeded cleanly.

Improvements_Identified_For_Consolidation:
- General pattern: never hardcode secrets; use env vars + gitignored `.env` + `.env.example`.
- General pattern: locate secrets with `git log --all -S` and verify removal with
  `git grep $(git rev-list --all)`.
- General pattern: for unpushed secrets, `git reset --soft <remote>` + recommit is the
  minimal, safe remediation.
- Environment quirk: this repo's shell is PowerShell; use `;` and `Select-String`, not
  `&&` and `grep`.
---

Date: 2026_08_15
TaskRef: "Fix run_local.bat failing to start backend in Viet-Heritage-Map"

Learnings:
- `run_local.bat` "worked a moment ago then broke" with no code change → environment issue,
  not a script bug. Symptom: backend never starts, localhost:8000 unreachable.
- Root cause: the default Python install `C:\Users\HELLO\AppData\Local\Programs\Python\Python313`
  exists on disk but is INCOMPLETE — it only contains `DLLs`, `Lib`, `libs`, `tcl`, with NO
  `python.exe` and NO `Scripts`. Therefore `python`, `pip`, and `py` are not on PATH, and
  `cmd /c "python/uvicorn ..."` fails silently → backend down.
- The working interpreter is Miniconda at `D:\.Miniconda\python.exe` (Python 3.13.5,
  uvicorn 0.40.0 installed). Verified: `Test-Path` True, `--version` works, `-m uvicorn` works.
- Diagnosis path that pinpointed it:
  - `netstat -ano | Select-String ":8000"` → no listener (backend really down).
  - `tasklist | Select-String python,uvicorn` → no python process.
  - `cmd /c "where python"` + `py --version` → "python not found" / "No installed Python found!".
  - `Get-ChildItem "C:\Users\HELLO\AppData\Local\Programs\Python\Python313"` → folder lacks python.exe.
- Fix applied to `run_local.bat` (minimal, user-approved):
  - `set "PYTHON=D:\.Miniconda\python.exe"` at top.
  - pip install → `"%PYTHON%" -m pip install -r requirements.txt`.
  - uvicorn startup → `cmd /c "cd backend && D:\.Miniconda\python.exe -m uvicorn app.main:app ..."`.
- Verified fix without running the whole .bat (which opens a browser + blocks on pause): launched
  uvicorn via Start-Process, polled port 8000 + `Invoke-WebRequest http://localhost:8000/` → 200 OK,
  then Stop-Process. Confirm port freed afterward.

Difficulties:
- PowerShell execution environment: `python`/`pip` not resolvable, and `start`/`pause` in the .bat
  block automation. Test uvicorn directly in PowerShell instead of running the .bat end-to-end.

Successes:
- Quick, targeted verification (test uvicorn directly, check port + HTTP, kill) proved the fix
  without launching the browser or hanging on `pause`.
- Hardcoded full path to Miniconda makes the script independent of the broken system PATH.

Improvements_Identified_For_Consolidation:
- Environment pattern: verify interpreter availability (`where python`, `py --version`,
  `Test-Path` on installed dir) before assuming a .bat "is broken". Python install folders can
  exist on disk but be incomplete/removed from PATH.
- For this project: backend must be launched with the Miniconda interpreter
  `D:\.Miniconda\python.exe -m uvicorn`, not bare `uvicorn`/`python`.
- Use a dedicated variable `%PYTHON%` at the top of a .bat for one-point interpreter path changes.
---

Date: 2026_08_16
TaskRef: "Fix 7 syntax problems in Project/planner-plan.js (Viet-Heritage-Map)"

Learnings:
- The 7 syntax problems were all in one corrupted block inside `renderPlan()`'s
  `pts.forEach` callback in `Project/planner-plan.js`. A mangled edit had merged the
  teardrop path's `d:` attribute into the `name` variable assignment, and dropped the
  `const g = S('g', ...)` and `const teardrop = S('path', ...)` declarations.
- The 7 problems were: (1) `d:` unexpected token `:` at line 263, (2) unclosed
  parenthesis in the `name` assignment, (3) `g` undefined, (4) `teardrop` undefined,
  (5) `idx` undefined, (6) `g` undefined (second use), (7) `idx` undefined (tooltip).
- `node --check <file>` is the fastest way to surface the first syntax error, but it
  stops at the first failure — the remaining undefined-variable problems only become
  visible by reading the surrounding block and reconstructing the intended logic.
- The intended structure: `name` falls back to `'Chặng ' + (i+1)`, `idx = i+1`, then a
  `g` group containing a teardrop `path` (with the `d` attribute) and a numbered text.

Difficulties:
- `node --check` only reports the first error; had to read the whole mangled block to
  recover the lost declarations and reconstruct the correct pin-rendering logic.

Successes:
- Reconstructed the corrupted block by matching the surrounding code's intent
  (numbered pins with teardrop shapes, day labels, tooltips) and the CSS class names
  (`rm-pin`, `rm-pin-shape`, `rm-pin-num`) referenced elsewhere.
- Verified with `node --check` → exit 0.

Improvements_Identified_For_Consolidation:
- General pattern: when a JS file has a syntax error, run `node --check` to find the
  first failure, then read the surrounding block to recover any lost declarations
  (undefined variables) that the parser can't report in one pass.
- For this project: `Project/planner-plan.js` renders the SVG route map; the pin block
  uses `rm-pin` / `rm-pin-shape` / `rm-pin-num` classes and `idx`/`name`/`day` locals.
---
<task_progress>
- [x] Read run_local.bat to understand its contents
- [x] Diagnosed root cause: default Python313 broken, no python.exe on PATH
- [x] Confirmed Miniconda python works
- [x] Applied run_local.bat fix (approved)
- [x] Verified backend starts + HTTP 200 + port freed
- [x] Logged learning to memory-bank/raw_reflection_log.md
- [ ] Present completion
</task_progress>

---

Date: 2026_08_16
TaskRef: "Update README.md from about.html/about.js in Viet-Heritage-Map"

Learnings:
- The README was significantly out of date: it described a React 18 + Vite + TypeScript
  frontend, PostgreSQL + pgvector, MinIO, Ollama (phi3.5), ONNX audio analysis, and
  faster-whisper — none of which exist in the current codebase.
- The actual stack (verified from `backend/requirements.txt`, `backend/app/main.py`,
  `backend/app/core/config.py`, and the API route files) is: FastAPI + SQLAlchemy 2.0
  (async) + SQLite/aiosqlite + httpx + pydantic-settings backend, and a vanilla
  JS/HTML/CSS frontend served statically by FastAPI from `Project/`.
- The AI is a Google Gemini server-side proxy (`gemini-3.1-flash-lite`) via
  `POST /api/v1/chat`; the API key stays server-side. There is no local LLM, no RAG,
  no pgvector, no MinIO, no ONNX, no Whisper in the current codebase.
- The about page content lives in `Project/about.js` as `window.ABOUT_CONTENT` (bilingual
  vi/en). It describes the project as an AI-powered digital museum archiving 16 intangible
  cultural heritages and 39 national treasures, with 5 core genres, 3 missions, 3 values,
  6 features, 5 team members, and 4 data sources.
- Actual API routes (from `backend/app/api/v1/`): `/sites`, `/festivals`, `/bookings`,
  `/trip/suggest`, `/chat`, plus `/health`. The old README's `/artisan/ask`, `/audio/analyze`,
  `/chat/voice`, `/chat/grade`, `/health/models`, `/health/cache` do not exist.
- The frontend is served at the root `/` by FastAPI's StaticFiles mount (html=True), so
  the app runs at `http://localhost:8000` with no separate frontend dev server.

Difficulties:
- The old README's repository layout referenced a `frontend/` directory that does not
  exist; the actual frontend is `Project/`. Had to enumerate `Project/` files to build an
  accurate layout tree.

Successes:
- Verified the real stack by reading `requirements.txt`, `config.py`, `main.py`, and all
  five API route files before rewriting — no guessing.
- Rewrote README to match the actual codebase: accurate features, architecture diagram,
  tech stack, repo layout, env vars, API reference, and frontend page table.

Improvements_Identified_For_Consolidation:
- General pattern: before updating a README, verify the actual stack from source
  (requirements.txt, main.py, config, route files) rather than trusting the existing README.
- For this project: the canonical stack is FastAPI + SQLite/aiosqlite + vanilla JS frontend
  served from `Project/`; AI = Google Gemini server-side proxy; API routes are
  /sites, /festivals, /bookings, /trip/suggest, /chat, /health.
- For this project: about-page content is in `Project/about.js` (window.ABOUT_CONTENT),
  bilingual vi/en, describing 16 heritages + 39 treasures.
</task_progress>

---

Date: 2026_08_16
TaskRef: "Harden Gemini chat reliability in Viet-Heritage-Map (structured output)"

Learnings:
- The Gemini chat proxy (`backend/app/api/v1/chat.py`) originally asked the model to embed a
  hidden `<FINAL_PLAN_JSON>` block inside free-form markdown, with `maxOutputTokens: 1024` and
  `temperature: 0.8`. This caused truncation mid-JSON, malformed links, and false tool
  integration — the model name (`gemini-3.5-flash`) was NOT the problem; it is a valid current
  model ID (confirmed via Context7 docs).
- The robust fix is Gemini's native structured output: set `generationConfig.responseMimeType:
  "application/json"` + `responseSchema` so the API GUARANTEES schema-valid JSON. This removes
  the entire class of malformed-JSON failures at the source instead of patching the parser.
- Restructured the contract to a JSON envelope `{ "reply": <markdown>, "plan": <object|null> }`.
  `plan` is a first-class field, null until the user confirms — the frontend no longer parses
  JSON out of prose.
- Must check `candidates[0].finishReason` (MAX_TOKENS / SAFETY / RECITATION /
  PROHIBITED_CONTENT) and fail loudly rather than forwarding partial text.
- Add retry with exponential backoff (3 attempts, 1s/2s/4s) on 429/5xx, and
  `safetySettings` with `BLOCK_ONLY_HIGH` to reduce spurious blocking on benign travel content.
- Lower `temperature` to 0.3 for deterministic structured output; raise `maxOutputTokens` to
  8192 (tunable via new `GEMINI_MAX_OUTPUT_TOKENS` setting).
- Frontend `Project/planner.js`: `callGemini` now returns `{ reply, plan }` and retries
  transient failures; `sendMessage` reads `result.plan` directly. Demo fallback still emits the
  legacy `<FINAL_PLAN_JSON>` block, so it is parsed via the existing `VHParseFinalPlan` to keep
  the map/booking UI working identically offline.
- `Project/planner-plan.js` needed NO changes — it already consumes the `plan` object shape
  robustly (numeric/string/missing coords, name lookup, graceful skip).

Difficulties:
- PowerShell shell rejects `&&` ("Das Token '&&' ist in dieser Version kein gültiges
  Anweisungstrennzeichen"); use `;` separators. `node --check` prints nothing on success, so
  verify with `$LASTEXITCODE -eq 0` to confirm.

Successes:
- Verified backend imports: `from app.core.config import settings` → `CONFIG OK gemini-3.5-flash
  8192`; `import app.api.v1.chat` → `CHAT MODULE OK`.
- Verified frontend syntax: `node --check Project/planner.js` → exit 0.

Improvements_Identified_For_Consolidation:
- General pattern: for LLM APIs that must return structured data, use the provider's native
  structured-output (responseSchema/responseMimeType) rather than asking for JSON inside prose.
- General pattern: always inspect finishReason/stop-reason and retry transient statuses with
  backoff; keep temperature low for deterministic structured tasks.
- For this project: `/api/v1/chat` returns `{ reply, plan }`; `plan` is null until confirmed.
  Model = `gemini-3.5-flash`, `GEMINI_MAX_OUTPUT_TOKENS=8192` in `backend/.env`.
</task_progress>
