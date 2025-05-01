import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// TODO: Add profile routes when implementing profile controller
router.get('/', (req, res) => {
  res.json({ message: 'Profile routes working' });
});

export default router; 