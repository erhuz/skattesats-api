const express = require('express');

const router = express.Router();

const services = require('../services/');

// API routes
router.get('/', (req, res) => {
  res.status(200).json('Working!');
});

router.get('/years', services.yearsService);

router.get('/municipalities/:year', services.municipalitiesService);

router.get('/assemblies/:municipalities/:year',);

// router.get('/tax/:municipality/:year');

module.exports = router;
