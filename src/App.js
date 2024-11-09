import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardContents from './components/DashboardContents/DashboardContents';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Dashboard Route */}
          <Route
            path="/DashboardContents"
            element={
              <Layout>
                <DashboardContents />
              </Layout>
            }
          />

          {/* Root Route */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
