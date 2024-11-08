import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContents from './components/DashboardContents';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          <div className="main-photo">
          <img 
          src="/maintheme.png" 
          alt="Main Theme" 
          className="main-photo" 
        />
          </div>
          <DashboardContents />
        </div>
      </div>
    </div>
  );
}

export default App;
