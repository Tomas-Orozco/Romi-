@echo off
echo Iniciando Symptom Tracker...
echo.

echo Iniciando Backend...
start cmd /k "cd backend && mvn spring-boot:run"

timeout /t 10 /nobreak > nul

echo Iniciando Frontend...
start cmd /k "cd frontend && npm run dev"

echo.
echo Aplicacion iniciada!
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo.
pause
