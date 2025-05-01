import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// TODO: Add mentorship routes when implementing mentorship controller
router.get('/', (req, res) => {
  res.json({ message: 'Mentorship routes working' });
});

export default router; 