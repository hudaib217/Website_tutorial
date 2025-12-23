# Digital Agency Website - MERN Stack

A professional, premium digital agency website built with the MERN stack (MongoDB, Express, React, Node.js). Features modern UI with bold colors, responsive design, and comprehensive digital services showcase.

## 🚀 Features

### Public Features
- **Home Page**: Hero section, services overview, portfolio preview, testimonials, CTA
- **About Us**: Mission, vision, values, team/skills showcase
- **Services**: 6 core services with detailed pages
  - Web Development
  - Mobile App Development
  - Automation Solutions
  - UI/UX Design
  - SEO & Marketing
  - Maintenance & Support
- **Portfolio**: Filterable project showcase with case studies
- **Blog**: Article listing with pagination and categories
- **Contact**: Dual forms (contact & quote request) with file upload

### Technical Features
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- React frontend with React Router
- Tailwind CSS for styling
- Form validation and file upload
- Rate limiting and security middleware
- SEO-friendly meta tags
- Responsive design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (v5 or higher) - running locally or MongoDB Atlas account
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone or Navigate to Project Directory

```bash
cd website
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
copy .env.example .env

# Edit .env file with your configuration
# Update MongoDB URI if needed
```

**Backend .env Configuration:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agency-website
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install

# Frontend runs on port 3000 by default (configured in vite.config.js)
```

### 4. Database Setup

**Option A: Local MongoDB**
- Ensure MongoDB is running on your system
- The application will connect to `mongodb://localhost:27017/agency-website`

**Option B: MongoDB Atlas**
- Create a free cluster at https://www.mongodb.com/cloud/atlas
- Get your connection string
- Update `MONGODB_URI` in backend/.env

### 5. Seed the Database

Populate the database with sample data:

```bash
# From the backend directory
npm run seed
```

This will create:
- 6 services
- 3 portfolio items
- 3 blog posts

### 6. Create Uploads Directory

```bash
# From backend directory
mkdir uploads
```

## 🚀 Running the Application

You need to run both backend and frontend servers:

### Terminal 1 - Backend Server

```bash
cd backend
npm run dev
```

Backend will run on: http://localhost:5000

### Terminal 2 - Frontend Server

```bash
cd frontend
npm run dev
```

Frontend will run on: http://localhost:3000

## 📁 Project Structure

```
website/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Express middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── server.js        # Express app entry
│   │   └── seed.js          # Database seeding
│   ├── uploads/             # File uploads storage
│   ├── .env.example         # Environment variables template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # Reusable components
│   │   │   └── sections/    # Page sections
│   │   ├── pages/           # Route pages
│   │   ├── services/        # API service layer
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Leads
- `POST /api/leads/contact` - Submit contact form
- `POST /api/leads/quote` - Submit quote request (with file upload)

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:slug` - Get service by slug

### Portfolio
- `GET /api/portfolio` - Get all portfolio items (supports ?category filter)
- `GET /api/portfolio/:slug` - Get portfolio item by slug
- `GET /api/portfolio/categories` - Get all categories

### Blogs
- `GET /api/blogs` - Get all blogs (supports pagination)
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/blogs/featured` - Get featured blogs
- `GET /api/blogs/categories` - Get all categories

## 🎨 Design Features

- **Bold Colors**: Primary blue and accent purple gradient scheme
- **Modern UI**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design, works on all devices
- **Premium Feel**: Gradients, shadows, and hover effects

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting on API endpoints (stricter on forms)
- Input validation with express-validator
- File upload restrictions (type, size)
- Environment variables for sensitive data

## 📝 Customization

### Adding More Services

Edit `backend/src/seed.js` to add more services, then run:
```bash
npm run seed
```

### Changing Colors

Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Adding Pages

1. Create page component in `frontend/src/pages/`
2. Add route in `frontend/src/App.jsx`
3. Add navigation link in `Header.jsx` and `Footer.jsx`

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod` or check MongoDB Atlas connection
- Verify `MONGODB_URI` in `.env` is correct

### Port Already in Use
- Change `PORT` in backend `.env`
- Change port in frontend `vite.config.js`

### File Upload Not Working
- Ensure `uploads/` directory exists in backend
- Check file size limits in `.env` and `middleware/upload.js`

### CORS Errors
- Verify `CORS_ORIGIN` in backend `.env` matches frontend URL

## 🚢 Production Deployment

### Backend Deployment (e.g., Heroku, Railway, Render)
1. Set environment variables
2. Ensure MongoDB is accessible (use MongoDB Atlas)
3. Build command: `npm install`
4. Start command: `npm start`

### Frontend Deployment (e.g., Vercel, Netlify)
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variable: `VITE_API_URL=<your-backend-url>`

## 📦 Built With

**Backend:**
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- Multer - File uploads
- Express Validator - Input validation
- Helmet - Security
- CORS - Cross-origin resource sharing

**Frontend:**
- React 18 - UI library
- React Router - Routing
- Tailwind CSS - Styling
- Vite - Build tool
- Axios - HTTP client
- React Icons - Icon library
- React Hot Toast - Notifications
- React Helmet Async - SEO meta tags

## 📄 License

This project is open source and available for use in your own projects.

## 🤝 Support

For issues or questions, please create an issue in the project repository.

---

**Happy Coding! 🚀**
