# Day 1 — Telecom App: Complete Beginner's Guide
> Written for someone who has never done this before.
> Goal: Get this project running on your machine in under 20 minutes.

---

## Table of Contents
1. [What Did We Build Today?](#1-what-did-we-build-today)
2. [Why These Technologies?](#2-why-these-technologies)
3. [Project Folder Structure](#3-project-folder-structure)
4. [Important Files — What Each One Does](#4-important-files--what-each-one-does)
5. [How This Was Created (Step-by-Step with Commands)](#5-how-this-was-created-step-by-step-with-commands)
6. [How to Run the Project](#6-how-to-run-the-project)
7. [How to Change Ports](#7-how-to-change-ports)
8. [Common Questions and Troubleshooting](#8-common-questions-and-troubleshooting)
9. [What Comes Next (Day 2 Preview)](#9-what-comes-next-day-2-preview)

---

## 1. What Did We Build Today?

Think of it like a restaurant:

```
[ Customer (Browser) ]
        |
        | types URL, clicks buttons
        v
[ Waiter (React Frontend) ]       ← runs on port 3030
        |
        | "I need some data!"
        v
[ Kitchen (Node/Express Backend) ] ← runs on port 4040
        |
        | (will eventually talk to a Database — not yet on Day 1)
```

- **Frontend** = The face of the app. Everything the user sees and clicks. Built with **React**.
- **Backend** = The brain of the app. Handles business logic, processes requests, returns data. Built with **Node.js + Express**.
- They live in **separate folders** (`Frontend/` and `Backend/`) and run as **two separate programs** at the same time.
- On Day 1, we only built the **skeleton** (scaffold). No real features yet — just proof that both sides start and respond.

---

## 2. Why These Technologies?

### React (Frontend UI Library)
- **What it is:** A JavaScript library made by Meta (Facebook) for building user interfaces.
- **Why we use it:** Instead of writing repetitive HTML over and over, React lets you write a **component** (a reusable UI block) once and use it everywhere. When data changes, the page updates automatically — no manual refresh.
- **Simple analogy:** React is like LEGO. You build small reusable bricks (components like `<Button>`, `<UserCard>`, `<Table>`) and snap them together to build complete pages.
- **File extension:** `.jsx` (JavaScript + HTML-like syntax called JSX)

### Vite (Frontend Build Tool + Dev Server)
- **What it is:** A modern build tool that powers the development experience for React.
- **Why we use it:** It starts the development server in under a second. When you save a file, the browser updates **instantly** without a full page reload. This is called **Hot Module Replacement (HMR)**.
- **Simple analogy:** Vite is a turbo-charged chef. The moment you update a recipe (file), the dish (browser page) refreshes instantly.
- **Config file:** `Frontend/vite.config.js`

### Node.js (Backend JavaScript Runtime)
- **What it is:** JavaScript running on the server side, outside the browser.
- **Why we use it:** Normally JavaScript only works inside browsers. Node.js gives JavaScript a "passport" to run on a server, read files, connect to databases, and handle HTTP requests.
- **Why not Python/Java?** Same language (JavaScript) on both frontend and backend — the team only needs to know one language.

### Express (Backend Web Framework)
- **What it is:** A minimal web framework built on top of Node.js that makes handling HTTP requests simple.
- **Why we use it:** Without Express, creating an API route would need 50+ lines of raw Node.js. Express makes it 3–5 lines.
- **Simple analogy:** Express is the menu + order system of your restaurant. When a request comes in (like "GET /api/users"), Express routes it to the right handler function.
- **Main file:** `Backend/src/index.js`

### nodemon (Auto-Restart Tool for Backend)
- **What it is:** A developer utility that watches your backend files and **automatically restarts** the Node.js server whenever you save a change.
- **Why we use it:** Without it, every code change requires you to manually stop (`Ctrl+C`) and restart (`node index.js`) the server. nodemon handles that automatically.
- **Simple analogy:** nodemon is like an assistant who says "You updated the code? I restarted the server for you — no need to do it yourself."
- **Only used during development** — never in production.

### ESLint (Code Quality Checker)
- **What it is:** A static analysis tool that reads your code and flags bugs, bad patterns, and inconsistencies — before you even run it.
- **Why we use it:** Catches mistakes early. Keeps all team members writing code in the same style.
- **Simple analogy:** ESLint is your spell-checker and grammar teacher, but for JavaScript/React code.
- **Config file:** `Frontend/eslint.config.js`

### Git (Version Control System)
- **What it is:** A system that takes snapshots (commits) of your project at different points in time.
- **Why we use it:** If you accidentally break something, you can instantly revert to the last working snapshot. It also lets teams collaborate without overwriting each other's code.
- **Simple analogy:** Git is like Google Docs' version history for your entire project — every save is tracked and reversible.

---

## 3. Project Folder Structure

```
Telecom-app/                      ← ROOT folder (the whole project)
│
├── notes.md                      ← This file! Day 1 training notes
├── .gitignore                    ← Tells Git what to ignore (never commit)
│
├── Frontend/                     ← Everything the USER sees in the browser
│   ├── package.json              ← Frontend dependencies + available commands
│   ├── package-lock.json         ← Exact versions locked (auto-generated)
│   ├── vite.config.js            ← Vite settings (port, plugins, proxy)
│   ├── eslint.config.js          ← ESLint rules
│   ├── .gitignore                ← Frontend-specific git ignores
│   ├── index.html                ← The single HTML file (React mounts here)
│   ├── public/                   ← Static files served as-is (no processing)
│   │   ├── favicon.svg           ← Tiny icon that appears in browser tab
│   │   └── icons.svg             ← Icon sprites for the UI
│   └── src/                      ← All React source code lives here
│       ├── main.jsx              ← React app bootloader (entry point)
│       ├── App.jsx               ← Root React component (what you see)
│       ├── App.css               ← Styles specific to App component
│       ├── index.css             ← Global styles (fonts, colors, resets)
│       └── assets/               ← Images used inside components
│           ├── hero.png
│           ├── react.svg
│           └── vite.svg
│
└── Backend/                      ← Everything the SERVER does
    ├── package.json              ← Backend dependencies + commands
    ├── package-lock.json         ← Exact versions locked (auto-generated)
    └── src/
        └── index.js              ← The entire backend server (for now)
```

**Key rule to remember:**
`Frontend/` and `Backend/` are completely independent applications.
Each has its own `package.json` and its own `node_modules/` folder.
They do NOT share code or dependencies.

---

## 4. Important Files — What Each One Does

### `Frontend/index.html` — The One HTML File
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```
- React apps have exactly **one HTML file**. This is it.
- The `<div id="root">` is the empty container where React injects ALL its content dynamically.
- Think of it as an empty picture frame — React fills it in.
- **You rarely edit this file** — only to change the page title or add external scripts.

---

### `Frontend/src/main.jsx` — React Bootloader
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
- This file runs ONCE when the browser loads your app.
- `createRoot(...)` finds the `<div id="root">` in index.html and hands control to React.
- `<App />` is your entire application rendered inside that div.
- `<StrictMode>` activates extra React warnings during development only — it helps find bugs.
- **You rarely edit this file.** It's the ignition key — just needs to exist.

---

### `Frontend/src/App.jsx` — Your Main Component
- This is currently showing the default Vite + React welcome screen.
- As you build real features, you'll replace this content with your actual pages.
- Every page, navigation bar, and feature will eventually trace back to this file.
- **This is where your real UI development begins.**

---

### `Frontend/vite.config.js` — Frontend Configuration
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],   // Enables React JSX support and HMR
  server: {
    port: 3030          // Frontend dev server listens on this port
  }
})
```
- `plugins: [react()]` — adds React support (JSX compilation, fast refresh).
- `server.port` — the port your frontend runs on. Change this if 3030 is taken.
- Later you'll add a `proxy` here to forward `/api` calls to the backend.
- **Edit when:** changing frontend port, adding proxy rules, configuring build output.

---

### `Frontend/package.json` — Frontend Dependencies and Scripts
```json
{
  "scripts": {
    "dev":     "vite",          ← npm run dev    → starts dev server on port 3030
    "build":   "vite build",    ← npm run build  → creates optimized production files in dist/
    "lint":    "eslint .",      ← npm run lint   → checks all JS/JSX files for errors
    "preview": "vite preview"   ← npm run preview→ serves the production build locally
  },
  "dependencies": {
    "react": "^19.2.6",         ← React core library
    "react-dom": "^19.2.6"      ← React's bridge to the browser DOM
  }
}
```
- `dependencies` = packages needed in production (React itself).
- `devDependencies` = packages only needed while developing (Vite, ESLint, etc.).
- **Never manually edit version numbers** — use `npm install package@version` instead.

---

### `Backend/src/index.js` — Your Entire Backend (for now)
```js
const express = require('express')
const app = express()

app.use(express.json())          // Parses incoming JSON request bodies

app.get('/', (req, res) => {     // Route: GET http://localhost:4040/
  res.json({ message: 'Telecom API is running fine bro!' })
})

const PORT = 4040
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
```
- Line by line:
  - `require('express')` — loads Express library.
  - `app = express()` — creates your server application.
  - `app.use(express.json())` — middleware that reads JSON from request bodies (needed for POST/PUT requests).
  - `app.get('/', ...)` — defines a route: "When anyone does a GET request to `/`, run this function."
  - `res.json(...)` — sends back a JSON response.
  - `app.listen(PORT, ...)` — starts the server and waits for connections.
- This one file will grow into multiple route files, middleware, database connections, auth logic, etc.
- **This is where all your backend development happens.**

---

### `Backend/package.json` — Backend Dependencies and Scripts
```json
{
  "scripts": {
    "start": "node src/index.js",      ← Production: just run it
    "dev":   "nodemon src/index.js"    ← Development: auto-restart on changes
  },
  "dependencies": {
    "express": "^5.2.1"                ← Needed in production
  },
  "devDependencies": {
    "nodemon": "^3.1.14"               ← Only needed during development
  }
}
```

---

### `.gitignore` — What Git Should Never Track
```
node_modules/    ← Can be 200MB+. Regenerated with `npm install`
.env             ← Contains passwords and API keys — NEVER commit this
dist/            ← Generated build output — can be regenerated
```
- This is a critical safety file. Without it, `git add .` would commit 100,000+ files.
- The `.env` rule is especially important — committing passwords to Git is a security disaster.

---

## 5. How This Was Created (Step-by-Step with Commands)

Every command that was run on Day 1, in exact order:

### Step 1 — Create Root Folder
```bash
mkdir Telecom-app
cd Telecom-app
```
- `mkdir` = make directory (creates a new folder)
- `cd` = change directory (navigate into the folder)
- **Why:** Every project needs a container folder.

---

### Step 2 — Initialize Git
```bash
git init
```
- Creates a hidden `.git/` folder that begins tracking changes.
- **Why first?** So every subsequent file creation is tracked from the beginning.

---

### Step 3 — Create Root .gitignore
Create a file named `.gitignore` in `Telecom-app/` with this content:
```
node_modules/
.env
dist/
```
- **Why immediately?** If you accidentally run `git add .` before adding this, you'll stage thousands of node_modules files.

---

### Step 4 — Scaffold the React Frontend
```bash
npm create vite@latest Frontend
```
- This command runs the official Vite project creator.
- **Interactive prompts:**
  1. Select framework: `React`
  2. Select variant: `JavaScript` (not TypeScript — Day 1 keeps it simple)
- Vite generates the entire `Frontend/` folder: index.html, src/, package.json, vite.config.js, etc.

Install frontend dependencies:
```bash
cd Frontend
npm install
```
- Reads `package.json` and downloads all packages into `Frontend/node_modules/`.
- First time takes 1–2 minutes. Subsequent installs are faster (cache).

Set custom port in `Frontend/vite.config.js`:
```js
server: {
  port: 3030   // added this line
}
```
- **Why 3030?** The default Vite port is 5173. We customized it to 3030 for this project.

---

### Step 5 — Create the Backend
Go back to root:
```bash
cd ..
```

Create backend folder and initialize npm:
```bash
mkdir Backend
cd Backend
npm init -y
```
- `npm init -y` creates `package.json` with default values.
- `-y` means "yes to all questions" — skips the interactive setup.

Install Express (production dependency):
```bash
npm install express
```
- Downloads Express into `Backend/node_modules/` and records it in `dependencies`.

Install nodemon (dev-only dependency):
```bash
npm install --save-dev nodemon
```
- `--save-dev` flag records it under `devDependencies` — signals it's only for development.

Create the source folder and server file:
```bash
mkdir src
```
Then create `Backend/src/index.js` with the Express server code shown above.

Add npm scripts to `Backend/package.json`:
```json
"scripts": {
  "start": "node src/index.js",
  "dev":   "nodemon src/index.js"
}
```

---

### Step 6 — Make the First Git Commit
```bash
cd ..                   # back to Telecom-app root
git add .               # stage all files
git commit -m "Day 1: project scaffold — React frontend + Node backend"
```
- `git add .` — marks all new/changed files as ready to commit.
- `git commit -m "..."` — saves a permanent snapshot with a descriptive message.
- **Good commit messages** = short summary of WHAT and WHY. Future you will thank present you.

---

## 6. How to Run the Project

You need **two terminals open at the same time** — one per side.

### Terminal 1 — Start the Backend
```bash
cd C:\Users\Admin\Desktop\Telecom-app\Backend
npm run dev
```

Successful output looks like:
```
[nodemon] 3.1.14
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
Server running on http://localhost:4040
```

Test it by visiting `http://localhost:4040` in your browser.
You should see: `{"message":"Telecom API is running fine bro!"}`

---

### Terminal 2 — Start the Frontend
```bash
cd C:\Users\Admin\Desktop\Telecom-app\Frontend
npm run dev
```

Successful output looks like:
```
  VITE v8.x.x  ready in 312 ms

  ➜  Local:   http://localhost:3030/
  ➜  Network: use --host to expose
```

Test it by visiting `http://localhost:3030` in your browser.
You should see the Vite + React welcome page.

---

### Quick Command Reference

| Action | Command | Run in folder |
|---|---|---|
| Start backend (development) | `npm run dev` | `Backend/` |
| Start frontend (development) | `npm run dev` | `Frontend/` |
| Stop either server | `Ctrl + C` | In that terminal |
| Build frontend for production | `npm run build` | `Frontend/` |
| Check frontend code quality | `npm run lint` | `Frontend/` |
| Install a new backend package | `npm install <name>` | `Backend/` |
| Install a new frontend package | `npm install <name>` | `Frontend/` |

---

## 7. How to Change Ports

### Change the Frontend Port (currently 3030)

Open [Frontend/vite.config.js](Frontend/vite.config.js) and change the number:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030      // ← Change this to your preferred port number
  }
})
```

After saving, restart the frontend server:
```bash
Ctrl+C
npm run dev
```
Your new URL will be `http://localhost:<your-new-port>`.

---

### Change the Backend Port (currently 4040)

Open [Backend/src/index.js](Backend/src/index.js) and change the number:

```js
const PORT = 4040    // ← Change this to your preferred port number
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
```

After saving, nodemon will auto-restart. You'll see:
```
[nodemon] restarting due to changes...
Server running on http://localhost:<your-new-port>
```

---

### Port Number Rules
- Valid range: `1024` to `65535`
- Two programs **cannot** share the same port — you'll get `EADDRINUSE` error
- **Ports to avoid** (commonly used by other software):
  - `80` / `443` → HTTP / HTTPS (need admin rights)
  - `3306` → MySQL database
  - `5432` → PostgreSQL database
  - `6379` → Redis cache
  - `27017` → MongoDB
  - `8080` → Common for other web servers
- **Safe choices for development:** `3000`, `3030`, `3031`, `4000`, `4040`, `5000`, `5173`, `8000`, `8888`, `9000`

---

## 8. Common Questions and Troubleshooting

### Error: `EADDRINUSE: address already in use :::4040`
**Cause:** Port 4040 is already being used by another process (maybe you have two backend terminals open).

**Fix option A — Kill the process:**
Open PowerShell as administrator:
```powershell
netstat -ano | findstr :4040
```
Find the PID (last column), then:
```powershell
taskkill /PID <pid-number> /F
```

**Fix option B — Just change the port** (see Section 7).

---

### Error: `Cannot find module 'express'`
**Cause:** You haven't installed dependencies yet (no `node_modules/` folder in Backend).

**Fix:**
```bash
cd Backend
npm install
```

---

### Frontend shows a blank white page
**Step 1:** Check you're visiting the right URL — `http://localhost:3030` (Frontend), NOT `http://localhost:4040` (Backend).

**Step 2:** Open browser DevTools (`F12`) → Console tab → look for red error messages.

**Step 3:** Check the terminal where `npm run dev` is running for error output.

---

### My code changes aren't showing in the browser
- **Frontend:** Vite HMR should auto-refresh. If not, press `F5` (hard refresh with `Ctrl+Shift+R`).
- **Backend:** nodemon should auto-restart. Check the terminal — if it shows an error, fix the syntax error first.

---

### `npm` is not recognized as a command
**Cause:** Node.js is not installed on this machine.

**Fix:** Download from [https://nodejs.org](https://nodejs.org) → choose the **LTS** version → install → restart terminal.

After installing, verify:
```bash
node --version    # should show v20.x.x or similar
npm --version     # should show 10.x.x or similar
```

---

### I accidentally deleted `node_modules/`
No problem — this folder is intentionally excluded from Git.

**Fix:**
```bash
cd Frontend && npm install   # restores Frontend/node_modules
cd ../Backend && npm install # restores Backend/node_modules
```

---

### How do I know if the backend is actually running?
Visit `http://localhost:4040` in a browser. You should see:
```json
{"message":"Telecom API is running fine bro!"}
```
If the browser shows "This site can't be reached" — the backend isn't running.

---

## 9. What Comes Next (Day 2 Preview)

Day 1 was the foundation. Here's the roadmap:

```
Day 1 ✓   Scaffold: React frontend (port 3030) + Express backend (port 4040)

Day 2      Connect them:
           - Add CORS middleware to backend (allows frontend to call it)
           - Add a proxy in vite.config.js (/api → backend)
           - Make a real API call from React to Express
           - Create first real page in React (e.g., Login or Dashboard)

Day 3+     Build features:
           - User authentication (JWT tokens)
           - Database connection (MySQL / MongoDB)
           - Real API routes (/api/users, /api/customers, etc.)
           - React Router (multiple pages/URLs)
           - Forms with validation
           - State management
```

The architecture we set up today looks like this in the future:

```
Browser (React)
    |
    | fetch('/api/customers')
    |
Express Backend
    |
    | SELECT * FROM customers
    |
Database (MySQL / MongoDB)
```

Everything we do from Day 2 onward builds on this structure.

---

## Summary Cheat Sheet

```
PORTS
  Frontend  →  http://localhost:3030    change in: Frontend/vite.config.js
  Backend   →  http://localhost:4040    change in: Backend/src/index.js

RUN THE PROJECT (needs 2 terminals)
  Terminal 1:  cd Backend   && npm run dev
  Terminal 2:  cd Frontend  && npm run dev

IMPORTANT FILES
  Frontend entry point   →  Frontend/src/main.jsx
  Frontend root UI       →  Frontend/src/App.jsx
  Frontend config        →  Frontend/vite.config.js
  Backend server         →  Backend/src/index.js
  Frontend dependencies  →  Frontend/package.json
  Backend dependencies   →  Backend/package.json

INSTALL NEW PACKAGES
  Backend   →  cd Backend  && npm install <package-name>
  Frontend  →  cd Frontend && npm install <package-name>

GIT WORKFLOW
  Check status     →  git status
  Save a snapshot  →  git add . && git commit -m "describe what you did"
  View history     →  git log --oneline
```

---

*Day 1 done. Scaffold is up. Both sides run. Time to connect them and build real features.*
