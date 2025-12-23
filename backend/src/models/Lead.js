const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['contact', 'quote'],
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  company: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  // Quote-specific fields
  service: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  timeline: {
    type: String,
    trim: true
  },
  attachments: [{
    filename: String,
    originalName: String,
    path: String,
    size: Number,
    mimetype: String
  }],
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);
