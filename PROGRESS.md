# Chat app MERN — build progress

This file summarizes what is in place from setting up **frontend** and **backend** through the current state. For step-by-step explanations inside the code, see the comments in each source file.

---

## Done so far

### 1. Project layout
- **Root** (`chat-app-mern/`): Node project with shared dependencies for the API (`package.json`, `"type": "module"`).
- **`frontend/`**: React app created with Vite (dev server, HMR, build).
- **`backend/`**: Express API, MongoDB connection, auth-related files.

### 2. Root (backend) packages
Installed and listed in root `package.json`:
- **express** — HTTP server and routing  
- **mongoose** — MongoDB object modeling  
- **dotenv** — load `PORT`, `MONGO_DB_URI`, etc. from `.env`  
- **bcryptjs** — hash passwords on signup  
- **cookie-parser**, **jsonwebtoken**, **socket.io** — available for login sessions, JWT, and real-time chat (not fully wired yet)

**Script:** `npm run server` runs `nodemon backend/server.js` so the API restarts on file changes.

### 3. Frontend (Vite + React)
- **`frontend/package.json`** — React 19, Vite 8, ESLint  
- **`vite.config.js`** — `@vitejs/plugin-react` for JSX  
- **`index.html`** — mounts the app on `#root`  
- **`src/main.jsx`** — `createRoot` + `StrictMode`, imports global CSS  
- **`src/App.jsx`** — default Vite/React starter UI (hero, counter, doc links)  
- **`src/index.css`**, **`src/App.css`** — layout, theme (light/dark), component styles  
- **`eslint.config.js`** — lint rules for JS/JSX  

Run from `frontend/`: `npm run dev` (Vite dev server).

### 4. Backend — server
- **`backend/server.js`** — loads `.env`, creates Express app, JSON body parser, mounts **`/api/auth`**, health check on **`/`**, listens on `PORT` and calls MongoDB connect.

### 5. Backend — database
- **`backend/db/connectToMongoDB.js`** — `mongoose.connect(process.env.MONGO_DB_URI)` with success/error logging.  
- **`backend/test.js`** — separate one-off script to test a MongoDB URI (for experiments; the main app uses `.env`).

### 6. Backend — user model
- **`backend/models/user.model.js`** — Mongoose schema: `fullname`, `username` (unique), `password` (min length 6), `gender` (enum), `profilePic`.

### 7. Backend — auth routes and signup
- **`backend/routes/auth.routes.js`** —  
  - `POST /signup` → full signup flow  
  - `POST /login`, `POST /logout` → placeholder responses for now  
- **`backend/controllers/auth.controller.js`** — **signup**: checks passwords match, username not taken, builds avatar URL, hashes password with bcrypt, saves user, returns `_id`, `fullName`, `username`, `profilePic` (no password).

### 8. Environment
- **`.env`** at project root (not committed in many setups): holds `MONGO_DB_URI`, `PORT`, etc. The server reads these via `dotenv`.

---

## Not built yet (typical next steps)

- **Login / logout** — real JWT or session handling, cookies, protected routes  
- **Frontend ↔ API** — forms or `fetch`/axios calling `http://localhost:5000/api/auth/...`  
- **Socket.io** — live messaging once users and auth exist  
- **CORS** — if the frontend runs on a different origin/port than the API  

---

## Quick reference — important files

| Area        | File |
|------------|------|
| API entry  | `backend/server.js` |
| DB connect | `backend/db/connectToMongoDB.js` |
| User shape | `backend/models/user.model.js` |
| Auth URLs  | `backend/routes/auth.routes.js` |
| Signup logic | `backend/controllers/auth.controller.js` |
| React entry | `frontend/src/main.jsx` |
| Main UI    | `frontend/src/App.jsx` |

---

*Last aligned with the codebase structure as of your current workspace.*
