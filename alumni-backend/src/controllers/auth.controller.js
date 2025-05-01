import jwt from 'jsonwebtoken';
import { config } from '../config/environment.js';
import User from '../models/User.model.js';
import { apiResponse } from '../utils/apiResponse.js';
import { AppError } from '../middleware/error.middleware.js';
import { sendVerificationEmail } from '../config/email.js';

const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, graduationYear, major } = req.body;

    // Check if user exists
    console.log('ther ethtehtwn');
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new AppError('Email already registered', 400);
    }
    console.log('123456');

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      graduationYear,
      major,
    });

    // Generate verification token
    user.generateEmailVerificationToken();
    await user.save();

    try {
      // Send verification email
      await sendVerificationEmail(email, user.emailVerificationToken);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // Continue with registration even if email fails
      // The user can request a new verification email later
    }

    // Generate token
    const token = generateToken(user._id);

    return apiResponse(res, 201, true, 'Registration successful. Please check your email to verify your account.', {
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verification token'
      });
    }

    // Update user verification status
    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Email verification failed'
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      throw new AppError('Please provide email and password', 400);
    }

    // Find user and include password for comparison
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError('Invalid email or password', 401);
    }

    // Check if email is verified
    if (!user.isEmailVerified) {
      throw new AppError('Please verify your email before logging in', 401);
    }

    // Generate token
    const token = generateToken(user._id);

    return apiResponse(res, 200, true, 'Login successful', {
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      throw new AppError('User not found', 404);
    }

    return apiResponse(res, 200, true, 'Profile retrieved successfully', user);
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, bio, currentPosition, company, location, skills, socialLinks } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        firstName,
        lastName,
        bio,
        currentPosition,
        company,
        location,
        skills,
        socialLinks,
      },
      { new: true, runValidators: true }
    );

    return apiResponse(res, 200, true, 'Profile updated successfully', user);
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id).select('+password');

    if (!(await user.comparePassword(currentPassword))) {
      throw new AppError('Current password is incorrect', 401);
    }

    user.password = newPassword;
    await user.save();

    return apiResponse(res, 200, true, 'Password changed successfully');
  } catch (error) {
    next(error);
  }
}; 