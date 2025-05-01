import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// TODO: Add event routes when implementing event controller
router.get('/', (req, res) => {
  res.json({ message: 'Event routes working' });
});

export default router; 