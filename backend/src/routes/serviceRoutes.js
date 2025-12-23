const express = require('express');
const { getAllServices, getServiceBySlug } = require('../controllers/serviceController');

const router = express.Router();

router.get('/', getAllServices);
router.get('/:slug', getServiceBySlug);

module.exports = router;
