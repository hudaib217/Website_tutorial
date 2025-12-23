const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  client: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['web-development', 'mobile-app', 'automation', 'ui-ux', 'seo-marketing', 'maintenance']
  },
  shortDescription: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  challenge: {
    type: String
  },
  solution: {
    type: String
  },
  results: [{
    type: String
  }],
  technologies: [{
    type: String
  }],
  images: [{
    url: String,
    caption: String
  }],
  thumbnail: {
    type: String,
    required: true
  },
  projectUrl: {
    type: String
  },
  completedDate: {
    type: Date
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
