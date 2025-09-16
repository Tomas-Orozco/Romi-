#!/bin/bash

echo "Iniciando Symptom Tracker..."
echo

echo "Iniciando Backend..."
cd backend
mvn spring-boot:run &
BACKEND_PID=$!

echo "Esperando 10 segundos para que el backend inicie..."
sleep 10

echo "Iniciando Frontend..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo
echo "Aplicacion iniciada!"
echo "Backend: http://localhost:8080"
echo "Frontend: http://localhost:5173"
echo
echo "Presiona Ctrl+C para detener ambos servicios"

# Función para limpiar procesos al salir
cleanup() {
    echo "Deteniendo servicios..."
    kill  2>/dev/null
    kill  2>/dev/null
    exit
}

# Capturar Ctrl+C
trap cleanup SIGINT

# Esperar indefinidamente
wait
