const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  forgotPassword, 
  resetPassword 
} = require('../controllers/authController');

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Forgot Password route
router.post('/forgot-password', forgotPassword);

// Reset Password route
router.post('/reset-password/:token', resetPassword);

module.exports = router;