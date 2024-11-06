// src/ForgetPassword.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';
import logo from '../../assets/logo.png';


function ForgetPassword() {
  return (
    <div className="forget-password-container">
      <div className="logo">
        <img src={logo} alt="JobMatch Logo" className="logo-image" />
      </div>
      <h2>Forget Password</h2>
      <p className="subtitle">
        Don’t miss your next opportunity. Sign in to stay updated on your professional world.
      </p>
      <form className="forget-password-form">
        <input type="text" placeholder="Email or Phone" />
        <div className="button-group">
          <button type="button" className="cancel-button">Cancel</button>
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