import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { config } from './config/environment.js';
import { passportConfig } from './config/passport.js';
import { errorHandler } from './middleware/error.middleware.js';
import { rateLimiter } from './middleware/rate-limiter.middleware.js';
import logger from './middleware/logger.middleware.js';

// Import routes
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';
import eventRoutes from './routes/event.routes.js';
import newsRoutes from './routes/news.routes.js';
import adminRoutes from './routes/admin.routes.js';
import mentorshipRoutes from './routes/mentorship.routes.js';
import notificationRoutes from './routes/notification.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(passport.initialize());
passportConfig(passport);
app.use(rateLimiter);

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/mentorship', mentorshipRoutes);
app.use('/api/notifications', notificationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

// Error handling
app.use(errorHandler);

// Handle undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

export default app; 