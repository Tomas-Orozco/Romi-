# 🏥 Symptom Tracker - Sistema de Registro de Síntomas Médicos

Una aplicación web full-stack para que los pacientes registren y consulten sus síntomas médicos de manera sencilla e intuitiva.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Clases y Componentes](#-clases-y-componentes)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso de la Aplicación](#-uso-de-la-aplicación)
- [API Endpoints](#-api-endpoints)
- [Problemas Conocidos](#-problemas-conocidos)
- [Próximas Mejoras](#-próximas-mejoras)

## 🎯 Descripción del Proyecto

**Symptom Tracker** es una aplicación web diseñada para permitir a los pacientes registrar sus síntomas médicos de manera digital. La aplicación permite evaluar 6 síntomas diferentes en una escala de 0 a 10, proporcionando una interfaz intuitiva y responsiva.

### Características Principales

- ✅ **Registro de Síntomas**: 6 síntomas con escala de intensidad (0-10)
- ✅ **Interfaz Responsiva**: Diseño mobile-first
- ✅ **Validaciones**: Validaciones básicas en frontend
- ✅ **Persistencia**: Base de datos en memoria
- ✅ **API REST**: Backend con endpoints bien definidos
- ✅ **CORS**: Comunicación frontend-backend configurada

## 🏗️ Arquitectura del Sistema

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│                 │ ──────────────► │                 │
│   Frontend      │                 │   Backend       │
│   (React)       │ ◄────────────── │   (Spring Boot) │
│                 │                 │                 │
└─────────────────┘                 └─────────────────┘
                                             │
                                             ▼
                                    ┌─────────────────┐
                                    │   Base de Datos │
                                    │   (H2 Memory)   │
                                    └─────────────────┘
```

### Patrón de Arquitectura

- **Frontend**: Single Page Application (SPA) con React
- **Backend**: Arquitectura REST con Spring Boot
- **Base de Datos**: H2 en memoria para desarrollo
- **Comunicación**: HTTP/REST con JSON

## 🛠️ Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | Framework de UI para componentes interactivos |
| **TypeScript** | 4.9.5 | Tipado estático para JavaScript |
| **Axios** | 1.12.2 | Cliente HTTP para comunicación con API |
| **React Scripts** | 5.0.1 | Herramientas de build y desarrollo |
| **CSS3** | - | Estilos responsivos y modernos |

**¿Por qué estas tecnologías?**

- **React**: Proporciona componentes reutilizables y estado reactivo
- **TypeScript**: Mejora la mantenibilidad del código con tipado estático
- **Axios**: Simplifica las peticiones HTTP con interceptores y manejo de errores
- **CSS3**: Permite crear interfaces modernas y responsivas

### Backend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Spring Boot** | 3.2.0 | Framework principal para aplicaciones Java |
| **Spring Web** | - | Módulo para crear APIs REST |
| **Spring Data JPA** | - | Abstracción para acceso a datos |
| **H2 Database** | - | Base de datos en memoria para desarrollo |
| **Maven** | 3.9.6 | Gestor de dependencias y build |
| **Java** | 17 | Lenguaje de programación |

**¿Por qué estas tecnologías?**

- **Spring Boot**: Proporciona auto-configuración y facilita el desarrollo
- **Spring Data JPA**: Simplifica el acceso a datos con repositorios
- **H2**: Base de datos ligera perfecta para desarrollo y testing
- **Maven**: Estándar de la industria para gestión de dependencias Java

## 📁 Estructura del Proyecto

```
symptom-tracker/
├── 📁 frontend/                    # Aplicación React
│   ├── 📁 public/                  # Archivos estáticos
│   │   ├── index.html              # HTML principal
│   │   ├── favicon.ico             # Icono de la aplicación
│   │   └── manifest.json           # Configuración PWA
│   ├── 📁 src/                     # Código fuente
│   │   ├── App.tsx                 # Componente principal
│   │   ├── App.css                 # Estilos principales
│   │   ├── index.tsx               # Punto de entrada
│   │   └── index.css               # Estilos globales
│   ├── package.json                # Dependencias y scripts
│   └── tsconfig.json               # Configuración TypeScript
├── 📁 backend/                     # Aplicación Spring Boot
│   ├── 📁 src/main/java/com/example/symptoms/
│   │   ├── SymptomTrackerApplication.java    # Clase principal
│   │   ├── SymptomReport.java               # Entidad JPA
│   │   ├── SymptomController.java           # Controlador REST
│   │   └── SymptomReportRepository.java    # Repositorio JPA
│   ├── 📁 src/main/resources/
│   │   └── application.yml                  # Configuración
│   └── pom.xml                              # Dependencias Maven
├── README.md                        # Documentación principal
├── start.bat                        # Script de inicio (Windows)
└── start.sh                         # Script de inicio (Linux/Mac)
```

## 🧩 Clases y Componentes

### Frontend (React)

#### `App.tsx` - Componente Principal
```typescript
interface SymptomReport {
  id: number;
  dolorCabeza: number;
  fiebre: number;
  tos: number;
  dolorPanza: number;
  dolorGarganta: number;
  fatiga: number;
}
```

**Responsabilidades:**
- Gestión del estado de la aplicación
- Renderizado del formulario y lista de síntomas
- Comunicación con la API del backend
- Validaciones básicas del formulario

**Características:**
- 6 sliders para evaluar síntomas (0-10)
- Navegación entre formulario y lista
- Validación: al menos un síntoma > 0
- Diseño responsivo

### Backend (Spring Boot)

#### `SymptomTrackerApplication.java` - Clase Principal
```java
@SpringBootApplication
public class SymptomTrackerApplication {
    public static void main(String[] args) {
        SpringApplication.run(SymptomTrackerApplication.class, args);
    }
}
```

**Propósito:** Punto de entrada de la aplicación Spring Boot

#### `SymptomReport.java` - Entidad JPA
```java
@Entity
@Table(name = "symptom_reports")
public class SymptomReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "dolor_cabeza")
    private Integer dolorCabeza; // 0-10
    
    private Integer fiebre;       // 0-10
    private Integer tos;          // 0-10
    // ... más síntomas
}
```

**Características:**
- Mapeo JPA a tabla `symptom_reports`
- ID auto-generado
- 6 campos de síntomas (Integer 0-10)
- Constructores y getters/setters

#### `SymptomController.java` - Controlador REST
```java
@RestController
@RequestMapping("/symptoms")
@CrossOrigin(origins = "http://localhost:3000")
public class SymptomController {
    
    @PostMapping
    public SymptomReport createSymptomReport(@RequestBody SymptomReport symptomReport) {
        return repository.save(symptomReport);
    }
    
    @GetMapping
    public List<SymptomReport> getAllSymptomReports() {
        return repository.findAll();
    }
}
```

**Endpoints:**
- `POST /symptoms` - Crear nuevo reporte
- `GET /symptoms` - Obtener todos los reportes

#### `SymptomReportRepository.java` - Repositorio JPA
```java
@Repository
public interface SymptomReportRepository extends JpaRepository<SymptomReport, Long> {
}
```

**Propósito:** Abstracción para operaciones CRUD con la base de datos

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** 18+ (para frontend)
- **Java** 17+ (para backend)
- **Maven** 3.6+ (para backend)

### Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Tomas-Orozco/Romi-.git
cd symptom-tracker
```

2. **Configurar Backend:**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

3. **Configurar Frontend:**
```bash
cd frontend
npm install
npm start
```

### Scripts de Inicio

**Windows:**
```bash
start.bat
```

**Linux/Mac:**
```bash
./start.sh
```

## 💻 Uso de la Aplicación

### 1. Acceder a la Aplicación
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8081/symptoms`

### 2. Registrar Síntomas
1. Seleccionar nivel de intensidad (0-10) para cada síntoma
2. Al menos un síntoma debe tener nivel > 0
3. Hacer clic en "Guardar Síntomas"

### 3. Ver Registros
1. Hacer clic en "Ver Registros"
2. Revisar historial de síntomas guardados

## 🔌 API Endpoints

### Base URL
```
http://localhost:8081
```

### Endpoints Disponibles

#### `POST /symptoms`
Crear un nuevo reporte de síntomas.

**Request Body:**
```json
{
  "dolorCabeza": 5,
  "fiebre": 0,
  "tos": 3,
  "dolorPanza": 0,
  "dolorGarganta": 2,
  "fatiga": 4
}
```

**Response:**
```json
{
  "id": 1,
  "dolorCabeza": 5,
  "fiebre": 0,
  "tos": 3,
  "dolorPanza": 0,
  "dolorGarganta": 2,
  "fatiga": 4
}
```

#### `GET /symptoms`
Obtener todos los reportes de síntomas.

**Response:**
```json
[
  {
    "id": 1,
    "dolorCabeza": 5,
    "fiebre": 0,
    "tos": 3,
    "dolorPanza": 0,
    "dolorGarganta": 2,
    "fatiga": 4
  }
]
```

## ⚠️ Problemas Conocidos

### 1. Backend No Inicia
**Problema:** Conflicto de versiones Java 17 vs Java 21
```
UnsupportedClassVersionError: class file version 65.0
```

**Causa:** Las clases se compilan con Java 21 pero el runtime es Java 17

**Solución Temporal:**
```bash
# Limpiar y recompilar
mvn clean compile
mvn spring-boot:run
```

### 2. Puerto en Uso
**Problema:** Puerto 8080 ocupado
**Solución:** Cambiar a puerto 8081 en `application.yml`

## 🔮 Próximas Mejoras

### Funcionalidades
- [ ] Autenticación de usuarios
- [ ] Historial de síntomas por fecha
- [ ] Gráficos de tendencias
- [ ] Exportar datos a PDF/Excel
- [ ] Notificaciones de recordatorio

### Técnicas
- [ ] Tests unitarios y de integración
- [ ] Dockerización
- [ ] CI/CD con GitHub Actions
- [ ] Base de datos PostgreSQL para producción
- [ ] Logging y monitoreo

### UI/UX
- [ ] Tema oscuro
- [ ] Internacionalización (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push

## 📝 Notas de Desarrollo

### Decisiones de Diseño

1. **Escala 0-10**: Permite granularidad en la evaluación de síntomas
2. **H2 en memoria**: Ideal para desarrollo, se reinicia en cada ejecución
3. **CORS habilitado**: Permite comunicación frontend-backend
4. **Sin autenticación**: Simplifica el desarrollo inicial

### Consideraciones de Seguridad

- Validación de entrada en frontend y backend
- Sanitización de datos
- CORS configurado para desarrollo local

## 👥 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

**Desarrollado con ❤️ para facilitar el registro de síntomas médicos**