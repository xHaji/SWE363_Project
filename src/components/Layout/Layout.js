import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const userType = location?.state?.userType;

  return (
    <div className="layout">
      <div className="header-wrapper">
        <Header userType={userType} />
      </div>
      <div className="layout-container">
        <div className="sidebar-wrapper">
          <Sidebar userType={userType} />
        </div>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 