const Blog = require('../models/Blog');

// Get all published blogs with pagination
exports.getAllBlogs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { category, tag } = req.query;

    const filter = { isPublished: true };

    if (category) {
      filter.category = category;
    }

    if (tag) {
      filter.tags = tag;
    }

    const blogs = await Blog.find(filter)
      .sort({ publishedDate: -1 })
      .skip(skip)
      .limit(limit)
      .select('-content -__v');

    const total = await Blog.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: blogs.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      isPublished: true
    }).select('-__v');

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// Get blog categories
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Blog.distinct('category', { isPublished: true });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    next(error);
  }
};

// Get featured/recent blogs
exports.getFeaturedBlogs = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 3;

    const blogs = await Blog.find({ isPublished: true })
      .sort({ publishedDate: -1 })
      .limit(limit)
      .select('-content -__v');

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};
