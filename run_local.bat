@echo off
chcp 65001 >nul
set "PYTHON=D:\.Miniconda\python.exe"
echo Starting VietHeritage Map locally...
echo.

REM ── Ensure the backend module directory is present for uvicorn ──
if not exist "backend\app\__init__.py" (
  echo [!] backend\app\__init__.py missing. Check the project structure.
)

REM ── Check for backend .env (Gemini key for Tour AI) ──
if not exist "backend\.env" (
  echo [!] backend\.env not found. Creating from template...
  copy "backend\.env.example" "backend\.env" >nul
  echo [!] Add your Gemini API key ^(starts with AIza...^) to backend\.env
  echo     → GEMINI_API_KEY="your_key_here"
)

REM ── Install Python deps if needed (first run) ──
if not exist "backend\.deps_installed" (
  echo [*] Installing backend dependencies...
  cd backend
  "%PYTHON%" -m pip install -r requirements.txt
  if %errorlevel%==0 (
    echo installed > .deps_installed
  ) else (
    echo [!] Dependency install failed. Check that Python & pip are installed.
  )
  cd ..
)

REM ── Start FastAPI backend ──
echo.
echo [*] Starting backend on http://localhost:8000
start "VietHeritage API" cmd /c "cd backend && D:\.Miniconda\python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"

REM ── Wait for backend ──
timeout /t 3 /nobreak >nul

REM ── Open the Tour AI planner ──
echo [*] Opening Tour AI planner...
start http://localhost:8000/planner.html

echo.
echo ========================================
echo  Backend:   http://localhost:8000
echo  Tour AI:   http://localhost:8000/planner.html
echo  Homepage:  http://localhost:8000/index.html
echo  API Docs:  http://localhost:8000/docs
echo ========================================
echo.
echo  Gemini setup:
echo   1. Get a free key: https://aistudio.google.com/app/apikey
echo   2. Paste it in backend\.env → GEMINI_API_KEY="AIza..."
echo   3. Restart this script
echo.
echo Press any key to stop all services...
pause >nul

taskkill /FI "WINDOWTITLE eq VietHeritage API*" /F >nul 2>&1
echo Services stopped.