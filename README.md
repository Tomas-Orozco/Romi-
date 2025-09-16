Symptom Tracker - Sistema de Registro de Síntomas Médicos

Una aplicación web full-stack para que los pacientes registren y consulten sus síntomas médicos de manera sencilla e intuitiv
Descripción del Proyecto


### Características Principales

- **Registro de Síntomas**: 6 síntomas con escala de intensidad (0-10)
- **Interfaz Responsiva**: Diseño mobile-first
- **Validaciones**: Validaciones básicas en frontend
- **Persistencia**: Base de datos en memoria
- **API REST**: Backend con endpoints bien definidos
- **CORS**: Comunicación frontend-backend configurada

## Arquitectura del Sistema

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

## Tecnologías Utilizadas

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