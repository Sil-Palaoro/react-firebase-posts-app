# 📰 React Blog – Personal Blog App

Aplicación web desarrollada en React con Firebase como backend serverless. Permite crear, listar, editar, eliminar y visualizar posts organizados por usuario (Firestore subcollections).
🔗 Demo online: https://react-blog-silvipalaoro.web.app/


## 🚀 Tecnologías utilizadas
Frontend

- React → Librería principal para la interfaz.

- React Router DOM → Navegación SPA.

- Lodash → Utilidades para manipulación de strings y arrays.

- Ant Design → Componentes de UI (Cards, layout, estilos base).

- CSS puro → Estilos personalizados para layout responsivo.


Backend (Serverless)

- Firebase Firestore → Base de datos NoSQL en tiempo real.

    - Se usa collectionGroup para traer todos los posts independientemente del usuario.

- Firebase Hosting → Despliegue del frontend.

- Firebase SDK v9 modular → Consultas más eficientes y sintaxis moderna.


## 🧩 Funcionalidades

✔️ Listado de todos los posts en el Home
✔️ Autenticación de usuarios (Firebase Auth)
✔️ Creación y edición de posts desde la interfaz
✔️ Visualización individual por usuario para edición y eliminación de posts
✔️ URLs amigables y navegación SPA
✔️ Lectura desde subcolecciones dentro de Firestore (users/{uid}/posts/{id})
✔️ Diseño responsivo en una sola columna
✔️ Componentes reutilizables (PostsSnippets, Home)

## 🗂️ Estructura principal del proyecto

```
src/
│
├── components/
│   ├── App.jsx
│   ├── AppNav.jsx
│   ├── CreatePost.jsx
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── MainLayout.jsx
│   ├── Post.jsx
│   ├── PostSnippet.jsx
│   ├── PostsSnippets.jsx
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── UpdatePost.jsx
│   └── UserPosts.jsx
├── src/
│   └── index.js
├── .env
├── .firebase/
├── firebase.js
├── index.css
├── package.json
├── README.md
└── index.html
```

## 🔥 Integración con Firebase
**Firestore**

Los posts se guardan en subcolecciones bajo cada usuario:

```
users/
  └── {uid}/
       └── posts/
            └── {postId}
```

Para obtener todos los posts, el proyecto utiliza:

```
const postsRef = collectionGroup(db, "posts");
const snapshot = await getDocs(postsRef);
```

Esto permite acceder a todos los posts del sistema sin importar el usuario.


## 🌐 Despliegue en Firebase Hosting

El proyecto está deployado mediante:

```
firebase init hosting
npm run build
firebase deploy
```


**URL del sitio:**
👉 https://react-blog-silvipalaoro.web.app/


## 📦 Instalación y ejecución local

```
git clone <repo>
cd react-blog
npm install
npm start
```

Crear un archivo firebase.js con la configuración del proyecto y un archivo .env con:

```
API_KEY="<tu-api-key>" 
APP_ID="<tu-app-id>"
MESSAGING_SENDER_ID="<tu-messaging-sender-id>"
```

## 🛠️ Mejoras futuras

- Likes/comentarios

- Panel de administración


## 🙌 Créditos

Creado por **Silvina Palaoro**  