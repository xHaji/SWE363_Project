// src/components/Header/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="header-icons">
        <i className="bell-icon">🔔</i>
        <i className="settings-icon">⚙️</i>
      </div>
    </div>
  );
}

export default Header;
