const express = require('express');
const { body } = require('express-validator');
const { createContact, createQuote } = require('../controllers/leadController');
const { formLimiter } = require('../middleware/rateLimiter');
const upload = require('../middleware/upload');

const router = express.Router();

// Validation rules for contact form
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('company').optional().trim(),
  body('phone').optional().trim(),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Validation rules for quote form
const quoteValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('company').optional().trim(),
  body('phone').optional().trim(),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('budget').optional().trim(),
  body('timeline').optional().trim(),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Routes
router.post('/contact', formLimiter, contactValidation, createContact);
router.post('/quote', formLimiter, upload.array('files', 5), quoteValidation, createQuote);

module.exports = router;
