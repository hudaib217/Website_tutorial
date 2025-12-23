const Portfolio = require('../models/Portfolio');

// Get all active portfolio items with optional filtering
exports.getAllPortfolio = async (req, res, next) => {
  try {
    const { category, featured } = req.query;

    const filter = { isActive: true };

    if (category) {
      filter.category = category;
    }

    if (featured === 'true') {
      filter.isFeatured = true;
    }

    const portfolio = await Portfolio.find(filter)
      .sort({ completedDate: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: portfolio.length,
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};

// Get single portfolio item by slug
exports.getPortfolioBySlug = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug,
      isActive: true
    }).select('-__v');

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};

// Get portfolio categories
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Portfolio.distinct('category', { isActive: true });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    next(error);
  }
};
