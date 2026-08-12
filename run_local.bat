@echo off
echo Starting VietHeritage Map locally...

REM Start FastAPI backend
echo.
echo Starting backend on http://localhost:8000
start "VietHeritage API" cmd /c "cd backend && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"

REM Wait for backend to start
timeout /t 3 /nobreak >nul

REM Open frontend via FastAPI static mount
echo Opening frontend...
start http://localhost:8000/index.html

echo.
echo ========================================
echo Backend: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo Frontend: http://localhost:8000/index.html
echo ========================================
echo.
echo Press any key to stop all services...
pause >nul

taskkill /FI "WINDOWTITLE eq VietHeritage API*" /F >nul 2>&1
echo Services stopped.