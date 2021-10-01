import express from 'express';
import {
  yearsService,
  municipalitiesService,
  assembliesService,
  taxService,
} from '../services';

const router = express.Router();

// API routes
router.get('/', (req, res) => {
  res.status(200).json('Working!');
});

router.get('/years', yearsService);

router.get('/municipalities/:year', municipalitiesService);

router.get('/assemblies/:municipality/:year', assembliesService);

router.get('/tax/:municipality/:year/:assembly?', taxService);

export default router;
