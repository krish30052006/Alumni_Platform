import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// TODO: Add notification routes when implementing notification controller
router.get('/', (req, res) => {
  res.json({ message: 'Notification routes working' });
});

export default router; 