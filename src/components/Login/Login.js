// src/components/Login/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userType.value.toUpperCase();

    switch (userInput) {
      case 'A':
        setUserType('admin');
        navigate('/ADashboardContent', { state: { userType: 'admin' } });
        break;
      case 'J':
        setUserType('jobseeker');
        navigate('/JBDashboardContent', { state: { userType: 'jobseeker' } });
        break;
      case 'E':
        setUserType('employee');
        navigate('/EDashboardContent', { state: { userType: 'employee' } });
        break;
      default:
        setError('Invalid user type. Please enter A, J, or E');
        break;
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="logo">
          <img src={logo} alt="JobMatch Logo" className="logo-login" />
        </div>
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <p className="subtitle">
          Don't miss your next opportunity. Sign in to stay updated<br />
          on your professional world.
        </p>
        <form className="login-form" onSubmit={handleLogin}>
          <input 
            type="text" 
            name="userType"
            placeholder="Enter A for Admin, J for Job Seeker, E for Employee" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="forgot-password">
          <Link to="/forget-password">Forgot password?</Link>
        </p>
        <p className="signup-text">
          New to Job Match? <Link to="/register">Join now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
