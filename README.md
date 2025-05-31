<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100" alt="React logo" />
</p>

<h1 align="center">Boilerplate React + vite + Redux + Tailwind</h1>

<p align="center">
  ⚡ Plantilla base moderna para iniciar proyectos con React 19 + vite, Redux Toolkit, Tailwind CSS, React Query y más.
</p>

---

## 📦 Tecnologías incluidas

Este boilerplate viene configurado con las siguientes librerías y herramientas:

| Tecnología              | Descripción                                                          |
| ----------------------- | -------------------------------------------------------------------- |
| **React 19**            | Librería principal para la construcción de interfaces modernas.      |
| **Vite**                | Empaquetador ultra rápido para desarrollo y producción.              |
| **TypeScript**          | Tipado estático para desarrollo más seguro y escalable.              |
| **ESLint**              | Linter para mantener código limpio y consistente.                    |
| **Redux Toolkit**       | Manejador de estado global con configuración simplificada.           |
| **Tailwind CSS**        | Utilidades CSS para estilos rápidos y personalizados.                |
| **React Query**         | Gestión de fetching de datos, cache y sincronización con el backend. |
| **React Router DOM v7** | Enrutador oficial para SPAs en React.                                |
| **React Toastify**      | Notificaciones y toasts fáciles de usar y personalizar.              |
| **Axios**               | Cliente HTTP para consumir APIs.                                     |
| **RxJS**                | Librería para programación reactiva basada en streams.               |

---

## 🚀 Estructura pensada para escalar

Esta plantilla está preparada para:

- Consumir datos con React Query.
- Utilizar Redux como gestor de estado global.
- Tener soporte completo para Tailwind CSS desde `global.css`.
- Mostrar errores o success de forma centralizada con Toasts (`react-toastify`).
- Realizar llamadas HTTP seguras con Axios.
- Usar programación reactiva avanzada con RxJS (ideal para flujos complejos).
- Manejadores de rutas usando React Router DOM versión 7.
- Desplegar fácilmente con Vite.

---

## 📁 Requisitos de entorno

Antes de iniciar, debes crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_APP_API=https://pokeapi.co/api/v2/
```

##  🧪 Scripts disponibles

npm run dev / yarn dev → Inicia el servidor de desarrollo.

npm run build / yarn build → Compila para producción.

npm run preview / yarn preview → Visualiza el build generado localmente.

npm run lint / yarn lint → Analiza y corrige problemas de estilo y sintaxis.


##  📂 Estructura sugerida del proyecto

```
src/
├── api/                 # Servicios o configuraciones de Axios
├── assets/              # Imágenes y recursos estáticos
├── components/          # Componentes reutilizables
├── features/            # Slices de Redux organizados por dominio
├── hooks/               # Custom hooks
├── pages/               # Páginas principales de la app
├── routes/              # Definición de rutas
├── store/               # Configuración de Redux
├── styles/              # Tailwind y estilos globales
├── App.tsx              # Componente principal
├── main.tsx             # Punto de entrada
```

Este boilerplate no incluye librerias de testeo para la decisión a futuro a utilizar por proyecto.

| Objetivo                 | Herramientas recomendadas                |
| ------------------------ | ---------------------------------------- |
| Testear componentes      | `Vitest` + `Testing Library`             |
| Simular APIs sin backend | `msw`                                    |
| Testeo E2E real          | `Playwright` (mejor que Cypress hoy día) |


Creado con ❤️ por Héctor Balan — listo para ser reutilizado y adaptado a cualquier proyecto React 2025.