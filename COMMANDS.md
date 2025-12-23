# Command Reference Guide

Quick reference for all commands you'll need to run the Digital Agency website.

## 🚀 First Time Setup

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3. Seed the Database (Important!)
```bash
cd backend
npm run seed
```

## 🏃 Running the Application

You need **2 terminal windows** running simultaneously:

### Terminal 1: Backend Server
```bash
cd backend
npm run dev
```
✅ Backend will run on: `http://localhost:5000`

### Terminal 2: Frontend Server
```bash
cd frontend
npm run dev
```
✅ Frontend will run on: `http://localhost:3000`

## 🛠️ Development Commands

### Backend Commands (from `backend/` directory)

| Command | Description |
|---------|-------------|
| `npm start` | Start backend in production mode |
| `npm run dev` | Start backend with nodemon (auto-restart) |
| `npm run seed` | Populate database with sample data |

### Frontend Commands (from `frontend/` directory)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 🗄️ Database Commands

### Check MongoDB Status
```bash
# Windows
mongo --version

# Mac/Linux
mongod --version
```

### Start MongoDB Service
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Stop MongoDB Service
```bash
# Windows
net stop MongoDB

# Mac
brew services stop mongodb-community

# Linux
sudo systemctl stop mongod
```

### Access MongoDB Shell
```bash
mongo
```

### View Database Collections
```bash
mongo
> use agency-website
> show collections
> db.services.find().pretty()
> db.portfolio.find().pretty()
> db.blogs.find().pretty()
```

## 📦 Package Management

### Add New Backend Dependency
```bash
cd backend
npm install <package-name>
```

### Add New Frontend Dependency
```bash
cd frontend
npm install <package-name>
```

### Remove Package
```bash
npm uninstall <package-name>
```

### Update All Packages
```bash
npm update
```

## 🧹 Maintenance Commands

### Clear Node Modules and Reinstall
```bash
# Backend
cd backend
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux
npm install

# Frontend
cd frontend
rmdir /s node_modules  # Windows
rm -rf node_modules    # Mac/Linux
npm install
```

### Clear Build Cache
```bash
cd frontend
rmdir /s dist          # Windows
rm -rf dist            # Mac/Linux
npm run build
```

### Re-seed Database (Clear and Repopulate)
```bash
cd backend
npm run seed
```

## 🐛 Debugging Commands

### Check Node Version
```bash
node --version
# Should be v16 or higher
```

### Check npm Version
```bash
npm --version
```

### Check MongoDB Connection
```bash
mongo --eval "db.version()"
```

### View Backend Logs (verbose)
```bash
cd backend
NODE_ENV=development npm run dev
```

### Check Port Usage
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :5000
lsof -i :3000
```

### Kill Process on Port
```bash
# Windows (replace PID with actual process ID from netstat)
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

## 🚢 Production Build Commands

### Build Frontend for Production
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Test Production Build Locally
```bash
cd frontend
npm run preview
```

### Start Backend in Production Mode
```bash
cd backend
NODE_ENV=production npm start
```

## 📊 Testing Commands

### Test Backend API Endpoints
```bash
# Using curl
curl http://localhost:5000/api/health
curl http://localhost:5000/api/services
curl http://localhost:5000/api/portfolio
curl http://localhost:5000/api/blogs

# Or open in browser:
# http://localhost:5000/api/services
```

### Test File Upload
```bash
curl -X POST http://localhost:5000/api/leads/quote \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "service=Web Development" \
  -F "message=Test message" \
  -F "files=@path/to/file.pdf"
```

## 🔄 Common Workflows

### Daily Development Workflow
```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm run dev

# Visit: http://localhost:3000
```

### Reset Everything
```bash
# 1. Stop all servers (Ctrl+C in terminals)

# 2. Re-seed database
cd backend
npm run seed

# 3. Restart servers
npm run dev

# 4. In new terminal
cd frontend
npm run dev
```

### Update Seed Data
```bash
# 1. Edit: backend/src/seed.js
# 2. Run:
cd backend
npm run seed
```

## 📝 Environment Variables

### View Current Environment
```bash
# Backend
cd backend
cat .env          # Mac/Linux
type .env         # Windows
```

### Edit Environment Variables
```bash
# Open in text editor
code .env         # VS Code
notepad .env      # Notepad
```

## 💡 Pro Tips

### Run Both Servers with One Command (Optional)
Install `concurrently` in root:
```bash
npm install -g concurrently
```

Create script in root `package.json`:
```json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  }
}
```

Run:
```bash
npm run dev
```

### Keep MongoDB Running in Background
```bash
# Windows - Set as Windows Service (already done during install)
# Mac - Use brew services
brew services start mongodb-community

# Linux - Enable systemd service
sudo systemctl enable mongod
```

---

**Quick Reference Card:**

```
┌─────────────────────────────────────────┐
│  START DEVELOPMENT                      │
├─────────────────────────────────────────┤
│  Terminal 1: cd backend && npm run dev  │
│  Terminal 2: cd frontend && npm run dev │
│  Open: http://localhost:3000            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  RESET DATABASE                         │
├─────────────────────────────────────────┤
│  cd backend && npm run seed             │
└─────────────────────────────────────────┘
```

Need more help? Check QUICKSTART.md or README.md!
