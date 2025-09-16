# Symptom Tracker - Registro de Síntomas

Una aplicación web simple para que los pacientes registren sus síntomas básicos.

## Arquitectura

- **Frontend**: React con TypeScript y Vite
- **Backend**: Spring Boot con Java 17
- **Base de datos**: H2 (en memoria)

## Cómo correr el proyecto

### Opción 1: Scripts automáticos

**Windows:**
`ash
start.bat
`

**Linux/Mac:**
`ash
chmod +x start.sh
./start.sh
`

### Opción 2: Manual

#### Backend

1. Navega a la carpeta backend:
   `ash
   cd backend
   `

2. Ejecuta el proyecto:
   `ash
   mvn spring-boot:run
   `

El backend estará disponible en http://localhost:8080

#### Frontend

1. Navega a la carpeta frontend:
   `ash
   cd frontend
   `

2. Instala las dependencias:
   `ash
   npm install
   `

3. Ejecuta el proyecto:
   `ash
   npm run dev
   `

El frontend estará disponible en http://localhost:5173

## Funcionalidades

- Formulario para registrar síntomas (dolor de cabeza, fiebre, tos, nivel de dolor)
- Validaciones básicas en el formulario
- Lista de registros guardados
- Diseño responsivo para móvil y computadora

## Endpoints de la API

- POST /symptoms - Crear un nuevo reporte de síntomas
- GET /symptoms - Obtener todos los reportes

## Estructura del Proyecto

`
symptom-tracker/
 README.md
 start.bat (Windows)
 start.sh (Linux/Mac)
 frontend/
    src/
       App.tsx
       App.css
       main.tsx
       index.css
    package.json
    vite.config.ts
 backend/
     src/main/java/com/example/symptoms/
        SymptomTrackerApplication.java
        SymptomReport.java
        SymptomReportRepository.java
        SymptomController.java
     src/main/resources/
        application.yml
     pom.xml
`

## Notas

- El backend usa H2 como base de datos en memoria, por lo que los datos se pierden al reiniciar
- El frontend está configurado para conectarse al backend en localhost:8080
- La aplicación es completamente responsiva y funciona en dispositivos móviles
- Se requiere Java 17 o superior para el backend
- Se requiere Node.js 18 o superior para el frontend

## Pruebas

1. Abre http://localhost:5173 en tu navegador
2. Completa el formulario de síntomas
3. Haz clic en "Guardar Síntomas"
4. Cambia a la pestaña "Ver Registros" para ver los datos guardados
