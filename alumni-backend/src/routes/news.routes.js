import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// TODO: Add news routes when implementing news controller
router.get('/', (req, res) => {
  res.json({ message: 'News routes working' });
});

export default router; 