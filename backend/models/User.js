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
    required: [true, 'Password is required']
  },
  userType: {
    type: String,
    required: true,
    enum: ['admin', 'employee', 'jobseeker']
  },
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    about: String,
    skills: [String],
    languages: [String],
    location: String,
    company: String,
    position: String,
    education: {
      degree: String,
      school: String,
      year: String,
      description: String
    },
    experience: [{
      title: String,
      company: String,
      years: Number,
      description: String
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);