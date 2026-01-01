# Deployment Guide

This guide covers the cheapest and most effective ways to deploy your MERN stack digital agency website.

---

## Recommended Stack (FREE)

| Service | Purpose | Cost |
|---------|---------|------|
| **Vercel** | Frontend (React) | Free |
| **Render** | Backend (Node.js) | Free |
| **MongoDB Atlas** | Database | Free (512MB) |

**Total Cost: $0/month** for small to medium traffic

---

## Option 1: Vercel + Render + MongoDB Atlas (Recommended - FREE)

### Step 1: MongoDB Atlas (Database)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (choose FREE tier - M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password

```
mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/digitalagency?retryWrites=true&w=majority
```

### Step 2: Deploy Backend on Render

1. Go to [render.com](https://render.com) and sign up
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `digitalagency-api`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=mongodb+srv://...your-atlas-uri...
   ```
6. Click "Create Web Service"
7. Copy your backend URL (e.g., `https://digitalagency-api.onrender.com`)

### Step 3: Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
5. Add Environment Variable:
   ```
   VITE_API_URL=https://digitalagency-api.onrender.com/api
   ```
6. Click "Deploy"

### Step 4: Update Frontend API URL

Before deploying, update `frontend/src/services/api.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

---

## Option 2: Railway (Easy - FREE tier available)

Railway offers an all-in-one solution with generous free tier.

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → Deploy from GitHub
4. Add MongoDB plugin (or use Atlas)
5. Configure environment variables
6. Deploy both frontend and backend

**Pros**: Simple, all-in-one
**Cons**: Limited free tier ($5 credit/month)

---

## Option 3: Netlify + Render (FREE)

Similar to Vercel + Render but using Netlify for frontend.

### Frontend on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
4. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com/api
   ```

---

## Option 4: DigitalOcean App Platform ($5-12/month)

Best for production with more traffic.

1. Go to [digitalocean.com](https://digitalocean.com)
2. Create App → GitHub
3. Add both components (frontend + backend)
4. Add managed MongoDB ($15/month) or use Atlas free

**Pros**: Reliable, scalable
**Cons**: Not free

---

## Option 5: VPS (Most Control - $4-6/month)

For full control and best performance per dollar.

### Providers:
- **DigitalOcean**: $4/month (droplet)
- **Vultr**: $5/month
- **Hetzner**: €3.79/month (cheapest)
- **Contabo**: $4.99/month

### Setup on VPS:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Clone your repo
git clone https://github.com/yourusername/website.git
cd website

# Setup Backend
cd backend
npm install
pm2 start npm --name "api" -- start

# Setup Frontend
cd ../frontend
npm install
npm run build

# Copy build to nginx
sudo cp -r dist/* /var/www/html/
```

---

## Cost Comparison

| Option | Monthly Cost | Best For |
|--------|-------------|----------|
| Vercel + Render + Atlas | **$0** | Starting out, portfolios |
| Railway | $0-5 | Simple projects |
| Netlify + Render | **$0** | Static-heavy sites |
| DigitalOcean App | $5-12 | Growing businesses |
| VPS (Hetzner/Vultr) | $4-6 | Full control, scaling |

---

## Environment Variables Reference

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
```

### Frontend (.env)
```env
VITE_API_URL=https://your-api-domain.com/api
```

---

## Pre-Deployment Checklist

- [ ] Update `frontend/src/services/api.js` to use environment variable
- [ ] Remove any hardcoded `localhost` URLs
- [ ] Set up MongoDB Atlas and get connection string
- [ ] Add environment variables to hosting platform
- [ ] Run `npm run build` locally to test for errors
- [ ] Seed database on production: `npm run seed`

---

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `youragency.com`)
3. Update DNS records at your registrar

### On Render:
1. Go to Service Settings → Custom Domain
2. Add your domain
3. Update DNS records

### Cheap Domain Registrars:
- **Namecheap**: ~$8-10/year for .com
- **Cloudflare Registrar**: At-cost pricing
- **Porkbun**: ~$8/year for .com

---

## SSL Certificates

All recommended platforms (Vercel, Render, Netlify) provide **FREE SSL certificates** automatically via Let's Encrypt.

---

## Performance Tips

1. **Enable Gzip** compression on backend
2. **Use CDN** for images (Cloudflare free tier)
3. **Optimize images** before uploading (use WebP format)
4. **Enable caching** headers for static assets

---

## Quick Start Commands

```bash
# Test production build locally
cd frontend
npm run build
npm run preview

# Test backend
cd backend
npm start
```

---

## Troubleshooting

### "CORS Error" after deployment
Add your frontend URL to backend CORS config:
```javascript
// backend/src/app.js
app.use(cors({
  origin: ['https://yourdomain.com', 'http://localhost:5173']
}));
```

### "Cannot connect to database"
- Check MongoDB Atlas IP whitelist (allow `0.0.0.0/0` for any IP)
- Verify connection string is correct
- Check environment variables are set

### "API calls failing"
- Verify `VITE_API_URL` is set correctly
- Check backend logs on Render dashboard
- Ensure backend is running (Render free tier sleeps after 15 min inactivity)

---

## Summary

**For starting out (FREE)**:
1. MongoDB Atlas (free 512MB)
2. Render for backend (free)
3. Vercel for frontend (free)

**For production**:
1. MongoDB Atlas (paid tier or self-hosted)
2. DigitalOcean/Railway for backend
3. Vercel/Netlify for frontend

Total cost: **$0 to get started**, scale as needed.














Yes, absolutely! On a VPS you can deploy both frontend and backend on the same server. Here's how it works:
VPS Deployment Architecture

Your VPS ($4-6/month)
├── Nginx (Web Server - Port 80/443)
│   ├── yourdomain.com → Frontend (static files)
│   └── yourdomain.com/api → Backend (proxy to Node.js)
├── Node.js Backend (Port 5000)
├── MongoDB (local or Atlas)
└── PM2 (Process Manager)
Quick Setup Commands

# 1. Install required software
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx

# 2. Install PM2 globally
sudo npm install -g pm2

# 3. Clone your repo
cd /var/www
git clone https://github.com/yourusername/website.git
cd website

# 4. Setup Backend
cd backend
npm install
pm2 start npm --name "api" -- start

# 5. Build Frontend
cd ../frontend
npm install
npm run build

# 6. Configure Nginx
sudo nano /etc/nginx/sites-available/default
Nginx Configuration

server {
    listen 80;
    server_name yourdomain.com;

    # Frontend - serve static files
    location / {
        root /var/www/website/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend - proxy API requests
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 7. Restart Nginx
sudo nginx -t
sudo systemctl restart nginx

# 8. Setup SSL (free with Certbot)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
Result
URL	Serves
yourdomain.com	Frontend (React)
yourdomain.com/api/*	Backend (Node.js)
Total Cost: ~$4-6/month for everything on one server. Would you like me to add this detailed VPS setup guide to your DEPLOY.md file?