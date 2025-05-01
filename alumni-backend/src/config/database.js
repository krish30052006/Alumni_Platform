import mongoose from 'mongoose';
import { config } from './environment.js';
import logger from '../middleware/logger.middleware.js';

export const connectDB = async () => {
  try {
    if (!config.mongodbUri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    const conn = await mongoose.connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error.message);
    // Don't exit the process, just throw the error
    throw error;
  }
}; 