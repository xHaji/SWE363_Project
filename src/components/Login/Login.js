// src/components/Login/Login.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="JobMatch Logo" className="logo-image" />
      </div>
      <h2>Welcome Back</h2>
      <p className="subtitle">
        Don't miss your next opportunity. Sign in to stay updated on your professional world.
      </p>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Email or Phone" required />
        <input type="password" placeholder="Password" required />
        <div className="button-group">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="signin-button">Sign In</button>
        </div>
      </form>
      <p className="forgot-password">
        <Link to="/forget-password">Forgot password?</Link>
      </p>
      <p>
        New to Job Match? <Link to="/register">Join now</Link>
      </p>
    </div>
  );
}

export default Login;
