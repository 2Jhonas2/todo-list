# 📝 Todo List App – FullStack (NestJS + React + Prisma + MySQL)

Aplicación fullstack diseñada para gestionar tareas personales con autenticación, rutas protegidas y un flujo completo de CRUD.  
Este proyecto implementa un backend robusto con **NestJS**, **Prisma ORM** y base de datos **MySQL**, junto con un frontend moderno construido en **React + Vite + TailwindCSS**.

Incluye despliegue real en:

- 🌐 **Frontend:** Netlify  
- 🧠 **Backend:** Render  
- 🗄️ **Base de datos:** Railway  

---

## 🚀 Tecnologías utilizadas

### **Backend**
- **NestJS** — Framework modular para Node.js
- **Prisma ORM** — Manejo de base de datos y migraciones
- **MySQL** — Base de datos relacional (Railway)
- **JWT** — Autenticación segura
- **Bcrypt** — Hash de contraseñas
- **Class Validator / Class Transformer** — Validación de DTOs
- **CORS** — Configurado para frontend en producción

### **Frontend**
- **React 18 + Vite** — SPA rápida y moderna
- **TypeScript**
- **TailwindCSS** — Estilos responsivos y diseño moderno
- **React Router DOM** — Ruteo y protección de rutas
- **Context API** — Manejo global de sesión
- **Fetch API** — Comunicación con el backend

### **Despliegue**
- **Render** → Backend NestJS
- **Netlify** → Frontend React
- **Railway** → Base de datos MySQL

---

## 📁 Estructura del proyecto

```bash
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
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── context/AuthContext.tsx
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    │   └── _redirects
    ├── package.json
    └── vite.config.ts
