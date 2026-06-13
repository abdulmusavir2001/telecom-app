# Day 1 — Telecom App Setup Notes

## Technologies Used
| Tool | Purpose |
|---|---|
| **Node.js** | Runs JavaScript on the server (outside browser) |
| **Express** | Framework to create API routes in Node.js |
| **React** | UI library — builds what users see in the browser |
| **Vite** | Runs React dev server, auto-refreshes browser on save |
| **nodemon** | Auto-restarts backend server on file save |
| **Git** | Tracks code changes locally (snapshots) |
| **GitHub** | Hosts your Git repo online (cloud backup + sharing) |

## Step-by-Step — What We Did

### Step 1 — Create Root Folder
```bash
mkdir Telecom-app
cd Telecom-app
```
### Step 2 — Initialize Git
```bash
git init
```
Create `.gitignore` file manually with:
```
node_modules/
.env
dist/
```

### Step 3 — Create React Frontend
```bash
npm create vite@latest Frontend
# choose: React → JavaScript
cd Frontend
npm install
cd ..
```
Then in `Frontend/vite.config.js` set port to `3030`:
```js
server: { port: 3030 }
```

### Step 4 — Create Node Backend
```bash
mkdir Backend
cd Backend
npm init -y
npm install express
npm install --save-dev nodemon
mkdir src
cd ..
```
Create `Backend/src/index.js` — Express server on port `4040`.
Add to `Backend/package.json` scripts:
```json
"dev": "nodemon src/index.js",
"start": "node src/index.js"
```

### Step 5 — First Git Commit
```bash
git add .
git commit -m "Day 1: project scaffold — React frontend + Node backend"
```

### Step 6 — Push to GitHub
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

---

## How to Run
```bash
# Terminal 1 — Backend
cd Backend && npm run dev       # → http://localhost:4040

# Terminal 2 — Frontend
cd Frontend && npm run dev      # → http://localhost:3030
```

## Change Ports
- **Frontend** → `Frontend/vite.config.js` → `server: { port: XXXX }`
- **Backend** → `Backend/src/index.js` → `const PORT = XXXX`
