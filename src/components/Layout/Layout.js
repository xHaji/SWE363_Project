import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 