# MongoDB Installation Guide for Windows

MongoDB is **NOT installed** on your system. Follow these steps to install it.

## 🎯 Quick Option: MongoDB Atlas (Cloud - Recommended)

**Easiest option - No local installation needed!**

### Step 1: Create Free MongoDB Atlas Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a **FREE** cluster (M0 Sandbox - Forever Free)
4. Choose a cloud provider and region (closest to you)
5. Click "Create Cluster" (takes 3-5 minutes)

### Step 2: Configure Database Access

1. In Atlas dashboard, go to **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Create a username and password (save these!)
   - Example: `username: admin`, `password: yourPassword123`
4. Select **"Read and write to any database"**
5. Click **"Add User"**

### Step 3: Configure Network Access

1. Go to **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access From Anywhere"** (0.0.0.0/0)
   - For development only! Restrict in production
4. Click **"Confirm"**

### Step 4: Get Connection String

1. Go to **Database** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your credentials

### Step 5: Update Your Backend

Edit `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:yourPassword123@cluster0.xxxxx.mongodb.net/agency-website?retryWrites=true&w=majority
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

**Important:** Add `/agency-website` before the `?` to specify database name!

### Step 6: Test Connection

```bash
cd backend
npm run seed
```

You should see:
```
MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
6 services created
3 portfolio items created
3 blog posts created
```

✅ **Done! MongoDB Atlas is ready!**

---

## 💻 Alternative: Install MongoDB Locally

If you prefer local installation:

### Step 1: Download MongoDB

1. Go to: https://www.mongodb.com/try/download/community
2. Select:
   - **Version:** Latest (8.0.x)
   - **Platform:** Windows x64
   - **Package:** MSI
3. Click **"Download"**

### Step 2: Install MongoDB

1. Run the downloaded `.msi` file
2. Choose **"Complete"** installation
3. **Important:** Check **"Install MongoDB as a Service"**
4. Service Name: `MongoDB`
5. **Check:** "Run service as Network Service user"
6. **Uncheck:** "Install MongoDB Compass" (optional GUI, not needed)
7. Click **"Install"**

### Step 3: Verify Installation

Open PowerShell as Administrator:

```powershell
# Check if MongoDB service is running
sc query MongoDB

# Or
Get-Service MongoDB
```

Should show: **STATUS: RUNNING**

### Step 4: Start MongoDB (if not running)

```powershell
# Start MongoDB service
net start MongoDB

# Or
Start-Service MongoDB
```

### Step 5: Add MongoDB to PATH (Optional)

1. Search Windows for **"Environment Variables"**
2. Click **"Environment Variables"**
3. Under **System Variables**, find **"Path"**
4. Click **"Edit"**
5. Click **"New"**
6. Add: `C:\Program Files\MongoDB\Server\8.0\bin`
7. Click **"OK"** on all windows

### Step 6: Test MongoDB

Open new PowerShell:

```powershell
# Test if mongod is accessible
mongod --version

# Connect to MongoDB shell (optional)
mongosh
```

### Step 7: Keep Default Connection String

Your `backend/.env` should have:

```env
MONGODB_URI=mongodb://localhost:27017/agency-website
```

This is already configured!

### Step 8: Seed Database

```bash
cd backend
npm run seed
```

✅ **Done! Local MongoDB is ready!**

---

## 🔧 Troubleshooting

### MongoDB Service Won't Start

**Solution 1: Run as Administrator**
```powershell
# Open PowerShell as Administrator
net start MongoDB
```

**Solution 2: Reinstall MongoDB**
- Uninstall MongoDB
- Delete folder: `C:\Program Files\MongoDB`
- Delete folder: `C:\data\db` (if exists)
- Reinstall with "Install as Service" checked

### Connection Still Failing

**Check MongoDB is listening:**
```powershell
netstat -an | findstr "27017"
```

Should show:
```
TCP    0.0.0.0:27017          0.0.0.0:0              LISTENING
TCP    [::]:27017             [::]:0                 LISTENING
```

### Port 27017 Already in Use

**Find and kill process:**
```powershell
# Find process using port 27017
netstat -ano | findstr "27017"

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

### Cannot Create Database Directory

**Create data directory manually:**
```powershell
# Create MongoDB data directory
mkdir C:\data\db

# Set permissions
icacls C:\data\db /grant Everyone:(OI)(CI)F
```

---

## 🚀 Quick Command Reference

### Start MongoDB Service
```powershell
net start MongoDB
```

### Stop MongoDB Service
```powershell
net stop MongoDB
```

### Restart MongoDB Service
```powershell
net stop MongoDB
net start MongoDB
```

### Check MongoDB Status
```powershell
sc query MongoDB
```

### Connect to MongoDB Shell
```powershell
mongosh
```

---

## ✅ Verify Everything Works

After MongoDB is running:

```bash
# Terminal 1: Seed database
cd backend
npm run seed

# Terminal 2: Start backend
npm run dev

# Should see:
# Server running in development mode on port 5000
# MongoDB Connected: localhost (or Atlas host)
```

No more timeout errors! 🎉

---

## 📝 Recommendation

**For beginners:** Use **MongoDB Atlas** (cloud version)
- ✅ No installation
- ✅ Free tier forever
- ✅ Accessible from anywhere
- ✅ Automatic backups
- ✅ No maintenance

**For advanced users:** Use **Local MongoDB**
- ✅ Faster (no network latency)
- ✅ Works offline
- ✅ Full control
- ❌ Requires installation
- ❌ Manual backups

Choose what works best for you! 🚀
