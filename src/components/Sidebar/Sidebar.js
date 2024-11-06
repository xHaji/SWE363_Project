// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path/to/logo.svg" alt="Logo" />
      </div>
      <ul className="menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/job-postings">Job Postings</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/applications">Applications</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
