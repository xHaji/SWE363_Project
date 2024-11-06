// src/components/Register/Register.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../assets/logo.png';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Assume successful registration here
    // You can add your registration logic or API request here

    navigate('/dashboard'); // Redirect to dashboard after registration
  };

  return (
    <div className="register-container">
      <div className="logo">
        <img src={logo} alt="JobMatch Logo" className="logo-image" />
      </div>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Email or Phone" required />
        <input type="password" placeholder="Password" required />
        <div className="button-group">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="signup-button">Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
