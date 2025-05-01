const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  currentPosition: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  profilePicture: {
    type: String,
  },
  verificationStatus: {
    type: String,
    enum: ['basic', 'silver', 'gold', 'platinum'],
    default: 'basic',
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String,
  },
  interests: [String],
  skills: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User; 