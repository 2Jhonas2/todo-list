# 📝 Todo List App – FullStack (NestJS + React + Prisma + MySQL)

Aplicación fullstack diseñada para gestionar tareas personales con autenticación, rutas protegidas y un flujo completo de CRUD. Este proyecto implementa un backend robusto con **NestJS**, **Prisma ORM** y base de datos **MySQL**, junto con un frontend moderno construido en **React** + **Vite** + **TailwindCSS**.

---

# Incluye despliegue real en:

- 🌐 Frontend: Netlify

- 🧠 Backend: Render

- 🗄️ Base de datos: Railway

- 🚀 Características

- ✅ Gestión de Tareas: Crear, editar, marcar como completadas y eliminar tareas.

- 🔐 Autenticación Segura: Registro, inicio de sesión y validación de JWT.

- 🔒 Rutas Protegidas: Acceso controlado a las funcionalidades según el estado de autenticación.

- 💻 Frontend Moderno: Interfaz responsiva y accesible, con diseño limpio utilizando TailwindCSS.

- 🧑‍🤝‍🧑 Multiusuario: Cada usuario tiene su propia lista de tareas, con autenticación a través de JWT y encriptación de contraseñas con bcrypt.

- 📱 Responsive: Funciona perfectamente en desktop, tablet y móvil.

- 🛠️ Tecnologías Utilizadas

---

# Backend

- **NestJS** — Framework modular para Node.js.

- **Prisma ORM** — Manejo de base de datos y migraciones.

- **MySQL** — Base de datos relacional.

- **JWT** — Autenticación segura mediante JSON Web Tokens.

- **Bcrypt** — Hash de contraseñas.

- **Class Validator** / **Class Transformer** — **Validación de DTOs**.

- **CORS** — Configurado para frontend en producción.

---

# Frontend

- **React 18** + **Vite** — SPA rápida y moderna.

- **TypeScript** — Tipado estático para un desarrollo más seguro.

- **TailwindCSS** — Estilos responsivos y diseño moderno.

- **React Router DOM** — Ruteo y protección de rutas.

- **Context API** — Manejo global de sesión.

- **Fetch API** — Comunicación con el backend.

---

# Despliegue

- Render → Backend NestJS

- Netlify → Frontend React

- Railway → Base de datos MySQL

---


# 📁 Estructura del Proyecto
```
todo-list/
│
├── backend/
│   ├── src/
│   │   ├── auth/             # Autenticación
│   │   ├── users/            # Gestión de usuarios
│   │   ├── tasks/            # Gestión de tareas
│   │   ├── prisma.service.ts
│   │   └── main.ts           # Punto de entrada al servidor
│   ├── prisma/
│   │   └── schema.prisma     # Esquema de la base de datos
│   ├── package.json          # Dependencias del backend
│   └── tsconfig.json         # Configuración de TypeScript
│
└── frontend/
    ├── src/
    │   ├── pages/            # Páginas (Home, Login, Register)
    │   ├── components/       # Componentes reutilizables
    │   ├── context/          # AuthContext
    │   ├── hooks/            # Hooks personalizados
    │   └── App.tsx           # Componente principal
    ├── public/
    │   └── _redirects        # Redirección de Netlify
    ├── package.json          # Dependencias del frontend
    └── vite.config.ts        # Configuración de Vite
```

---

## 📡 API Endpoints

### Autenticación
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión

### Tareas
- `GET /todos` - Obtener todas las tareas
- `POST /todos` - Crear nueva tarea
- `DELETE /todos/:id` - Eliminar tarea

---

# 📦 Instalación Local
**Requisitos Previos**

- Node.js 18+

- npm o yarn

- MySQL

1. Clonar el Repositorio
```
git clone <tu-repositorio>
cd todo-list
```
2. Configurar el Frontend
```
cd frontend
npm install
```


Crear archivo .env:
```
VITE_API_URL=http://localhost:3000
```


Iniciar en modo desarrollo:
```
npm run dev
```

El frontend estará disponible en:
```
http://localhost:5173.
```

3. Configurar el Backend
```
cd backend
npm install
```


Crear archivo .env:
```
DATABASE_URL="mysql://root:password@localhost:3306/todolist"
FRONTEND_URL="http://localhost:5173"
PORT=3000
```


Generar Prisma Client y migrar la base de datos:
```
npx prisma generate
npx prisma migrate dev
```

Iniciar el backend:
```
npm run start:dev
```

El backend estará disponible en:
```
http://localhost:3000.
```

---

# 🔐 Licencia

Este proyecto está licenciado bajo un licenciamiento publico. El código fuente **no** es **modificable**, y su uso está restringido a las personas o entidades que cuenten con autorización explícita del autor.

# 👤 Autor

Jhon Paez - [GitHub](https://github.com/2Jhonas2)

# 📝 Notas Adicionales

Si necesitas más información sobre cómo hacer uso de esta aplicación, consultar el código o entender su estructura, no dudes en contactarme.

Este proyecto se mantiene en publico pero no está destinado para modificaciones públicas.
