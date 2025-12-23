# Deployment Checklist

Use this checklist when deploying your Digital Agency website to production.

## ☁️ Pre-Deployment Checklist

### 1. Code Preparation
- [ ] All features tested locally
- [ ] No console.log() statements in production code
- [ ] All TODO comments resolved or documented
- [ ] Code committed to version control (Git)
- [ ] .env files are in .gitignore (never commit secrets!)

### 2. Database Preparation
- [ ] MongoDB Atlas account created (free tier available)
- [ ] Database cluster created
- [ ] Database user created with password
- [ ] IP whitelist configured (0.0.0.0/0 for anywhere, or specific IPs)
- [ ] Connection string obtained
- [ ] Sample data seeded to production database

### 3. Environment Variables
- [ ] Production environment variables prepared
- [ ] MongoDB connection string for production
- [ ] CORS origin set to production frontend URL
- [ ] File upload limits configured
- [ ] Node environment set to 'production'

## 🚀 Backend Deployment (Render/Railway/Heroku)

### Recommended: Render.com (Free Tier Available)

1. **Create Account**
   - [ ] Sign up at render.com
   - [ ] Connect GitHub repository

2. **Create Web Service**
   - [ ] New → Web Service
   - [ ] Connect repository
   - [ ] Root directory: `backend`
   - [ ] Build command: `npm install`
   - [ ] Start command: `npm start`

3. **Environment Variables** (Add in Render dashboard)
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-atlas-connection-string>
   NODE_ENV=production
   CORS_ORIGIN=<your-frontend-url>
   MAX_FILE_SIZE=5242880
   UPLOAD_DIR=./uploads
   ```

4. **Deploy**
   - [ ] Click "Create Web Service"
   - [ ] Wait for build to complete
   - [ ] Test API endpoint: `https://your-app.onrender.com/api/health`
   - [ ] Note the backend URL for frontend configuration

### Alternative: Railway.app

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
cd backend
railway init

# Deploy
railway up

# Add environment variables
railway variables set MONGODB_URI=<your-connection-string>
railway variables set NODE_ENV=production
# ... add other variables
```

## 🎨 Frontend Deployment (Vercel/Netlify)

### Recommended: Vercel (Free Tier Available)

1. **Create Account**
   - [ ] Sign up at vercel.com
   - [ ] Install Vercel CLI: `npm install -g vercel`

2. **Prepare Frontend**
   ```bash
   cd frontend

   # Create .env.production file
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

3. **Deploy**
   ```bash
   # From frontend directory
   vercel

   # Follow prompts:
   # - Set up and deploy: Y
   # - Which scope: (your account)
   # - Link to existing project: N
   # - Project name: digital-agency-frontend
   # - Directory: ./
   # - Override settings: N
   ```

4. **Configure in Vercel Dashboard**
   - [ ] Project Settings → Environment Variables
   - [ ] Add: `VITE_API_URL = https://your-backend-url.onrender.com/api`
   - [ ] Redeploy if needed

### Alternative: Netlify

1. **Build locally**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy**
   - [ ] Drag `dist` folder to netlify.com/drop
   - OR use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

## 🔐 Post-Deployment Security Checklist

- [ ] Update CORS_ORIGIN to production frontend URL only
- [ ] Enable HTTPS (Render/Vercel/Netlify provide this automatically)
- [ ] Set secure headers (already configured with Helmet)
- [ ] Test rate limiting is working
- [ ] Verify file upload restrictions
- [ ] Review and remove any test/debug endpoints
- [ ] Set up error monitoring (optional: Sentry, LogRocket)
- [ ] Configure custom domain (optional)

## ✅ Testing Checklist

### Backend Tests
- [ ] Health check: `GET /api/health`
- [ ] Get services: `GET /api/services`
- [ ] Get portfolio: `GET /api/portfolio`
- [ ] Get blogs: `GET /api/blogs`
- [ ] Submit contact form: `POST /api/leads/contact`
- [ ] Submit quote form: `POST /api/leads/quote`
- [ ] File upload working
- [ ] Rate limiting working (test multiple requests)

### Frontend Tests
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] File upload works
- [ ] Responsive design on mobile
- [ ] Images/icons load
- [ ] No console errors
- [ ] Loading states appear
- [ ] Success/error messages show

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## 📊 Monitoring & Maintenance

### Setup Monitoring
- [ ] Add Google Analytics (optional)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry)
- [ ] Enable backend logs

### Regular Maintenance
- [ ] Review and respond to leads
- [ ] Update blog content
- [ ] Add new portfolio items
- [ ] Monitor performance
- [ ] Check for npm package updates
- [ ] Backup database regularly

## 🌐 Custom Domain Setup (Optional)

### If using custom domain:

**Backend (Render)**
1. [ ] Add custom domain in Render dashboard
2. [ ] Add DNS records (provided by Render)
3. [ ] Wait for SSL certificate

**Frontend (Vercel)**
1. [ ] Add domain in Vercel dashboard
2. [ ] Add DNS records (provided by Vercel)
3. [ ] Update CORS_ORIGIN in backend to new domain

## 📱 Mobile App (Future)

If converting to mobile app:
- [ ] Build PWA with service workers
- [ ] Add manifest.json
- [ ] Configure for app stores
- [ ] Test offline functionality

## 🔄 Continuous Deployment (Optional)

### Setup Auto-Deploy on Git Push

**Render:**
- [ ] Already auto-deploys on push to main branch

**Vercel:**
- [ ] Already auto-deploys on push to main branch

**Webhook triggers:**
- [ ] Configure webhook for manual triggers
- [ ] Set up staging environment

## 💾 Backup Strategy

- [ ] MongoDB Atlas auto-backups enabled
- [ ] Database backup schedule set
- [ ] Code backed up to Git repository
- [ ] Environment variables documented securely
- [ ] Uploaded files backup plan (consider cloud storage)

## 📞 Support & Documentation

- [ ] Update README with production URLs
- [ ] Document API endpoints
- [ ] Create user guide (if needed)
- [ ] Set up support email/form
- [ ] Create FAQ page

## 🎉 Launch Checklist

Final steps before announcing launch:

- [ ] All tests passing
- [ ] Performance optimized
- [ ] SEO meta tags verified
- [ ] Analytics configured
- [ ] Social media preview images set
- [ ] Error pages customized (404, 500)
- [ ] Contact information updated
- [ ] Legal pages added (Privacy Policy, Terms)
- [ ] Sitemap generated
- [ ] Robots.txt configured

---

## 📋 Quick Deployment Commands

```bash
# Build frontend
cd frontend
npm run build

# Test production build locally
npm run preview

# Deploy backend (Render via Git)
git add .
git commit -m "Deploy backend"
git push origin main

# Deploy frontend (Vercel)
cd frontend
vercel --prod

# Check deployment
curl https://your-backend.onrender.com/api/health
curl https://your-frontend.vercel.app
```

---

## 🆘 Troubleshooting

### Backend Won't Deploy
1. Check build logs in Render/Railway
2. Verify package.json has correct scripts
3. Ensure MongoDB connection string is correct
4. Check environment variables are set

### Frontend Won't Deploy
1. Test `npm run build` locally
2. Check for build errors
3. Verify VITE_API_URL is set correctly
4. Clear build cache and retry

### Database Connection Issues
1. Check MongoDB Atlas IP whitelist
2. Verify connection string format
3. Ensure database user has correct permissions
4. Test connection string locally first

### CORS Errors
1. Verify CORS_ORIGIN matches frontend URL exactly
2. Include https:// protocol
3. No trailing slash
4. Redeploy backend after changes

---

**Need Help?**

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- Railway Docs: https://docs.railway.app

---

✅ **Deployment Complete!**

Your Digital Agency website is now live and ready to accept clients!

Share your URLs:
- Frontend: https://your-site.vercel.app
- Backend API: https://your-api.onrender.com
