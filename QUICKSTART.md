# Quick Start Guide

Follow these steps to get your Digital Agency website running in minutes!

## Prerequisites Check

✅ Node.js installed (v16+) - Check with: `node --version`
✅ MongoDB installed and running - Check with: `mongod --version`

## 5-Minute Setup

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Step 3: Start MongoDB

**Windows:**
```bash
# MongoDB should auto-start, or run:
net start MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### Step 4: Seed Database

```bash
cd ../backend
npm run seed
```

You should see:
```
MongoDB Connected: localhost
6 services created
3 portfolio items created
3 blog posts created
Database seeded successfully!
```

### Step 5: Start Backend Server

```bash
# From backend directory
npm run dev
```

Expected output:
```
Server running in development mode on port 5000
MongoDB Connected: localhost
```

### Step 6: Start Frontend (New Terminal)

```bash
cd frontend
npm run dev
```

Expected output:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

## 🎉 Done!

Open your browser and visit: **http://localhost:3000**

## What You Can Do Now

1. **Browse the website** - Explore all pages
2. **Test contact form** - Go to Contact page
3. **Request a quote** - Try the quote form with file upload
4. **Filter portfolio** - Click different categories on Portfolio page
5. **View services** - Click on any service for details

## Default Ports

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017

## Quick Troubleshooting

### "Cannot connect to MongoDB"
```bash
# Check if MongoDB is running
mongo --eval "db.version()"

# If not, start it:
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### "Port 5000 already in use"
Edit `backend/.env` and change PORT to 5001 (or any free port)

### "Port 3000 already in use"
The Vite dev server will automatically suggest another port

### "Module not found"
```bash
# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install
```

## Next Steps

- Read the full README.md for detailed documentation
- Customize colors in `frontend/tailwind.config.js`
- Add your own content to the seed file
- Deploy to production (see README.md)

Need help? Check the main README.md file for comprehensive documentation!
