const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
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
  excerpt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: true
  },
  author: {
    name: String,
    avatar: String,
    bio: String
  },
  category: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  readTime: {
    type: Number, // in minutes
    default: 5
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  metaTitle: {
    type: String
  },
  metaDescription: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);
