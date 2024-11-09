// src/ForgetPassword.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgetPassword.css';
import logo from '../../assets/logo.png';


function ForgetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    navigate('/login');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="forget-password-container">
      <div className="logo">
        <img src={logo} alt="JobMatch Logo" className="logo-image" />
      </div>
      <h2>Forget Password</h2>
      <p className="subtitle">
        Don’t miss your next opportunity. Sign in to stay updated on your professional world.
      </p>
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email or Phone" required />
        <div className="button-group">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="reset-button">Reset Password</button>
        </div>
      </form>
      <p>
        New to Job Match? <Link to="/register">Join now</Link>
      </p>
    </div>
  );
}

export default ForgetPassword;