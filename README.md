# 📝 Todo List App – FullStack (NestJS + React + Prisma + MySQL)

**Actividad Final Integradora: “Todo List Fullstack con Despliegue en la Nube y CI/CD”**

---

## 📖 Descripción General

Esta aplicación **Todo List Fullstack** permite gestionar tareas personales mediante un CRUD completo (crear, listar, actualizar y eliminar tareas).  
El proyecto simula un entorno profesional real, incluyendo **desarrollo**, **persistencia de datos**, **autenticación**, **despliegue en la nube** y **CI/CD**.

La aplicación está desarrollada con:
- **Frontend:** React + Vite
- **Backend:** NestJS
- **Base de datos:** MySQL (Railway)
- **Despliegue:** Netlify (Frontend), Render (Backend), Railway (DB)

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este proyecto, el aprendiz será capaz de:

- Diseñar e implementar una aplicación web fullstack.
- Consumir una API REST desde un frontend en React.
- Conectar un backend con una base de datos MySQL en Railway.
- Desplegar aplicaciones en servicios cloud (Netlify, Render, Railway).
- Implementar autenticación segura con JWT.
- Configurar CI/CD con GitHub Actions.
- Documentar arquitectura, endpoints y procesos de despliegue.

---

## 🚀 Características

- ✅ CRUD completo de tareas.
- 🔐 Autenticación con JWT.
- 🔒 Rutas protegidas.
- 🧑‍🤝‍🧑 Soporte multiusuario.
- 📱 Diseño responsive (desktop, tablet y móvil).
- ⚠️ Validaciones básicas y manejo de errores.

---

## 🧰 Tecnologías Utilizadas

### Backend
- NestJS
- Prisma ORM
- MySQL
- JWT
- Bcrypt
- Class Validator / Transformer
- CORS

### Frontend
- React 18 + Vite
- TypeScript
- TailwindCSS
- React Router DOM
- Context API
- Fetch API

---

## 📡 API Endpoints

### 🔐 Autenticación
- `POST /auth/register` – Registrar usuario
- `POST /auth/login` – Iniciar sesión (retorna JWT)

### 📝 Tareas
- `GET /todos` – Listar tareas del usuario autenticado
- `POST /todos` – Crear tarea
- `PATCH /todos/:id` – Actualizar tarea
- `DELETE /todos/:id` – Eliminar tarea

### 👤 Usuarios
- `GET /users/me` – Obtener datos del usuario autenticado
- `PATCH /users/me` – Actualizar datos del usuario

---

## 📁 Estructura del Proyecto

```
todo-list/
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── tasks/
│   │   ├── prisma.service.ts
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.tsx
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── README.md
├── ARQUITECTURA.md
└── API.md
```

---

## 🛠️ Instalación Local

### Requisitos Previos
- Node.js 18+
- npm o yarn
- MySQL

---

### 🔹 Frontend

```bash
cd frontend
npm install
```

Crear archivo `.env`:
```env
VITE_API_URL=http://localhost:3000
```

Iniciar:
```bash
npm run dev
```

Disponible en:
```
http://localhost:5173
```

---

### 🔹 Backend

```bash
cd backend
npm install
```

Crear archivo `.env`:
```env
DATABASE_URL="mysql://root:password@localhost:3306/todolist"
PORT=3000
FRONTEND_URL="http://localhost:5173"
JWT_SECRET="supersecret"
```

Generar cliente y migrar DB:
```bash
npx prisma generate
npx prisma migrate dev
```

Iniciar backend:
```bash
npm run start:dev
```

Disponible en:
```
http://localhost:3000
```

---

## 🧑‍💻 CI/CD – GitHub Actions

Este proyecto incluye un pipeline de CI/CD con **GitHub Actions**.

- Se ejecuta en cada `push` y `pull_request`.
- Pasos del workflow:
  - Instalación de dependencias
  - Build del frontend
- El pipeline falla si el build no es exitoso.

Archivo:
```
.github/workflows/ci.yml
```

---

## 🌐 Despliegue en Producción

- **Frontend:** Netlify  
- **Backend:** Render  
- **Base de Datos:** Railway  

### Enlaces:
- Frontend: [https://your-netlify-url](https://todo-list-sena.netlify.app)
- Backend: [https://your-render-url](https://todo-list-i3jh.onrender.com/)
- Base de datos: Railway (conexión privada)

---

## 🏗️ Arquitectura

La arquitectura sigue el flujo:

**Usuario → Frontend (Netlify) → Backend (Render) → Base de Datos (Railway)**


---

## 🔐 Licencia

Este proyecto está licenciado bajo un licenciamiento público.  
El código fuente **NO es modificable** y su uso requiere autorización explícita del autor.

---

## 👤 Autor

**Jhon Paez**  
[GitHub](https://github.com/2Jhonas2)
