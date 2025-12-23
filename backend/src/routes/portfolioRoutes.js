const express = require('express');
const { getAllPortfolio, getPortfolioBySlug, getCategories } = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', getAllPortfolio);
router.get('/categories', getCategories);
router.get('/:slug', getPortfolioBySlug);

module.exports = router;
