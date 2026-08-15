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
