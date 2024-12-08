const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  userType: {
    type: String,
    required: true,
    enum: ['admin', 'employee', 'jobseeker']
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    company: { type: String }, // for employees
    position: { type: String }, // for employees
    resume: { type: String },  // for jobseekers (URL to resume)
    skills: [String],         // for jobseekers
    experience: [{ 
      title: String,
      company: String,
      years: Number
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  }
});

module.exports = mongoose.model('User', userSchema);