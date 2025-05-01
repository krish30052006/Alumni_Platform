import express from 'express';
import { register, login, getProfile, updateProfile, changePassword, verifyEmail } from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verifyEmail);

// Protected routes
router.use(authenticate);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);

export default router; 