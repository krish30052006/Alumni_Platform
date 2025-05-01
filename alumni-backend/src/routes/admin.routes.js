import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes require admin authentication
router.use(authenticate);
router.use(authorizeAdmin);

// TODO: Add admin routes when implementing admin controller
router.get('/', (req, res) => {
  res.json({ message: 'Admin routes working' });
});

export default router; 