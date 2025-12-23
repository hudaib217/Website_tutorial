const { validationResult } = require('express-validator');
const Lead = require('../models/Lead');

// Handle contact form submission
exports.createContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, company, phone, message } = req.body;

    const lead = await Lead.create({
      type: 'contact',
      name,
      email,
      company,
      phone,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: lead._id
      }
    });
  } catch (error) {
    next(error);
  }
};

// Handle quote request submission
exports.createQuote = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, company, phone, message, service, budget, timeline } = req.body;

    // Handle file attachments
    const attachments = req.files ? req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype
    })) : [];

    const lead = await Lead.create({
      type: 'quote',
      name,
      email,
      company,
      phone,
      message,
      service,
      budget,
      timeline,
      attachments
    });

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully! We will review and get back to you soon.',
      data: {
        id: lead._id
      }
    });
  } catch (error) {
    next(error);
  }
};
