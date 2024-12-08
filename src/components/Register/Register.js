// src/components/Register/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../assets/logo.png';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          profile: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and redirect
        localStorage.setItem('token', data.token);
        localStorage.setItem('userType', data.userType);
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Server error. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="logo">
        <img src={logo} alt="JobMatch Logo" className="logo-register" />
      </div>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required 
        />
        <input 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required 
        />
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required 
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required 
        />
        
        <div className="user-type-selection">
          <label>Select User Type:</label>
          <select 
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="jobseeker">Job Seeker</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}
        
        <div className="button-group">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="signup-button">Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
