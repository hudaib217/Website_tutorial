require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

// Import routes
const leadRoutes = require('./routes/leadRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use('/api/', apiLimiter);

// Static files for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/blogs', blogRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
