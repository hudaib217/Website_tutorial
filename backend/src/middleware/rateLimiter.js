const rateLimit = require('express-rate-limit');

// General rate limiter for API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limiter for form submissions
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 form submissions per hour
  message: 'Too many form submissions from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { apiLimiter, formLimiter };
