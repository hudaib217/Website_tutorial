const Service = require('../models/Service');

// Get all active services
exports.getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find({ isActive: true })
      .sort({ order: 1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    next(error);
  }
};

// Get single service by slug
exports.getServiceBySlug = async (req, res, next) => {
  try {
    const service = await Service.findOne({
      slug: req.params.slug,
      isActive: true
    }).select('-__v');

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      data: service
    });
  } catch (error) {
    next(error);
  }
};
