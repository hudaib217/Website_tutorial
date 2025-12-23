const express = require('express');
const { getAllBlogs, getBlogBySlug, getCategories, getFeaturedBlogs } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/featured', getFeaturedBlogs);
router.get('/categories', getCategories);
router.get('/:slug', getBlogBySlug);

module.exports = router;
