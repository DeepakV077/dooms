# 🚀 QUICK START GUIDE

## Running Your Doomsphere App

### ✅ STEP 1: Start Backend (Flask)

**Open Git Bash or PowerShell** and run:
```bash
cd C:/Doomsphere/Dooms/backend
venv/Scripts/python app.py
```

✅ Backend will run on: `http://127.0.0.1:5000`
✅ You should see: "Running on http://127.0.0.1:5000"

---

### ✅ STEP 2: Start Frontend (React)

**Open NEW PowerShell or Command Prompt** (NOT Git Bash!) and run:
```powershell
cd C:\Doomsphere\Dooms\frontend
npm run dev
```

✅ Frontend will run on: `http://localhost:5173`
✅ You should see: "Local: http://localhost:5173/"

---

### 🎯 OPEN IN BROWSER

Go to: **http://localhost:5173**

You should see the beautiful OSIS home page! 🌊

---

## ⚠️ IMPORTANT NOTES:

1. **Git Bash CANNOT run npm commands** - use PowerShell or CMD
2. **Keep BOTH terminals open** while developing
3. Backend = Python/Flask (Port 5000)
4. Frontend = React/Vite (Port 5173)

---

## 🐛 If you see errors:

### Tailwind CSS Error?
Run in PowerShell:
```powershell
cd C:\Doomsphere\Dooms\frontend
npm uninstall tailwindcss
npm install -D tailwindcss@3.4.0 --legacy-peer-deps
npm run dev
```

### Backend not connecting?
Make sure Flask is running on port 5000

---

## 📝 Development Workflow:

**Terminal 1 (Git Bash or PowerShell):**
```bash
cd C:/Doomsphere/Dooms/backend
venv/Scripts/python app.py
```

**Terminal 2 (PowerShell or CMD ONLY):**
```powershell
cd C:\Doomsphere\Dooms\frontend
npm run dev
```

**Browser:**
Open `http://localhost:5173`

---

✨ **That's it! Your app should be running!** ✨
