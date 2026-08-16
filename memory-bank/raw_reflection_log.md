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

Improvements_Identified_For_Consolidation:
- General pattern: When a project lacks a committed lockfile and the Dockerfile references a source-less project via `uv sync --frozen`, prefer installing from an explicit `requirements.txt` into a venv.
- General pattern: When the runtime uses a plain venv (no project), invoke the venv's executable directly (`/app/.venv/bin/<bin>`) rather than `uv run <bin>`.
- Viet-Heritage-Map specifics: render.yaml + Dockerfile at repo root is the deployment entry; backend/Dockerfile.prod & backend/render.yaml were broken duplicates.
- Viet-Heritage-Map: local tooling gap (no uv, no docker on dev machine) — changes must be verifiable by the Render cloud build.
---