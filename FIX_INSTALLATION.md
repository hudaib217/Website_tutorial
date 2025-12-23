# Fix Installation Issues

If you're seeing errors, follow these steps to fix them:

## 🔧 Step 1: Clean Install Backend

```bash
cd backend

# Remove old node_modules and package-lock
rmdir /s /q node_modules
del package-lock.json

# Fresh install with latest packages
npm install

# Verify installation
npm list
```

## 🔧 Step 2: Clean Install Frontend

```bash
cd ../frontend

# Remove old node_modules and package-lock
rmdir /s /q node_modules
del package-lock.json

# Fresh install with latest packages
npm install

# Verify installation
npm list
```

## 🔧 Step 3: Start MongoDB

Make sure MongoDB is running:

```bash
# Check if MongoDB is running
mongo --version

# Start MongoDB service
net start MongoDB
```

## 🔧 Step 4: Seed Database

```bash
cd ../backend
npm run seed
```

Expected output:
```
MongoDB Connected: localhost
Clearing existing data...
Seeding services...
6 services created
Seeding portfolio...
3 portfolio items created
Seeding blogs...
3 blog posts created
Database seeded successfully!
```

## 🔧 Step 5: Start Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Expected output:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v6.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
```

## ✅ Verification

Open your browser and visit: **http://localhost:3000**

You should see:
- ✅ Beautiful homepage with gradient hero
- ✅ Navigation working
- ✅ Services displayed
- ✅ No console errors

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module 'tailwindcss'"

**Solution:**
```bash
cd frontend
npm install tailwindcss@latest postcss@latest autoprefixer@latest --save-dev
```

### Issue: CSS warnings about @tailwind

**Solution:** These warnings are normal! Your IDE doesn't recognize Tailwind directives, but the app will work fine. You can ignore them or add this to your VS Code settings:

1. Create `.vscode/settings.json` in the frontend folder:
```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

### Issue: "Port 5000 already in use"

**Solution:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

### Issue: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check MongoDB status
sc query MongoDB

# Start MongoDB
net start MongoDB

# If not installed, download from:
# https://www.mongodb.com/try/download/community
```

### Issue: Frontend shows blank page

**Solution:**
1. Check browser console for errors (F12)
2. Make sure backend is running on port 5000
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito mode

### Issue: API calls failing with CORS error

**Solution:** Check that `backend/.env` has:
```
CORS_ORIGIN=http://localhost:3000
```

## 📦 What Changed

I've updated both package.json files to use:

**Latest versions (December 2024):**
- ✅ React 18.3.1 (latest stable)
- ✅ Vite 6.x (latest)
- ✅ Tailwind CSS 3.4.17 (latest stable v3)
- ✅ Express 4.21.2
- ✅ Mongoose 8.9.3
- ✅ All other dependencies to latest stable

**Removed:**
- ❌ Tailwind CSS v4 (beta) - causing conflicts
- ❌ Conflicting duplicate packages

## 🎯 Quick Command Summary

```bash
# Complete fresh start
cd backend
rmdir /s /q node_modules && del package-lock.json && npm install && npm run seed && npm run dev

# In new terminal
cd frontend
rmdir /s /q node_modules && del package-lock.json && npm install && npm run dev
```

## ✨ After Installation

Your app should now be running smoothly with:
- ✅ Latest stable versions of all packages
- ✅ No conflicting dependencies
- ✅ Proper Tailwind CSS v3 setup
- ✅ All features working

Visit: **http://localhost:3000** 🚀

---

**Still having issues?** Make sure:
1. Node.js version is v16 or higher: `node --version`
2. MongoDB is installed and running
3. No other apps using ports 3000 or 5000
4. No antivirus blocking the ports
