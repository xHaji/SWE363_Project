import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ADashboardContent from './components/DashboardContents/ADashboardContent';
import JBDashboardContent from './components/DashboardContents/JBDashboardContent';
import EDashboardContent from './components/DashboardContents/EDashboardContent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import SettingsEmployer from './components/Settings/Settings-Employer';
import SettingsJobSeeker from './components/Settings/Settings-JobSeeker';
import SearchAdmin from './components/Search/SearchAdmin';
import SearchJobSeekers from './components/Search/SearchJobSeekers';
import ProfileJobSeeker from './components/Profile/Profile-JobSeeker';
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
            path="/ADashboardContent"
            element={
              <Layout>
                <ADashboardContent />
              </Layout>
            }
          />
          <Route
            path="/JBDashboardContent"
            element={
              <Layout>
                <JBDashboardContent />
              </Layout>
            }
          />
          <Route
            path="/EDashboardContent"
            element={
              <Layout>
                <EDashboardContent />
              </Layout>
            }
          />

          {/* Root Route */}
          <Route path="/" element={<Login />} />

          {/* Settings Routes with Layout */}
          <Route
            path="/settings-employer"
            element={
              <Layout>
                <SettingsEmployer />
              </Layout>
            }
          />
          <Route
            path="/settings-jobseeker"
            element={
              <Layout>
                <SettingsJobSeeker />
              </Layout>
            }
          />

          {/* Search Routes with Layout */}
          <Route
            path="/search-admin"
            element={
              <Layout>
                <SearchAdmin />
              </Layout>
            }
          />
          <Route
            path="/search-jobseeker"
            element={
              <Layout>
                <SearchJobSeekers />
              </Layout>
            }
          />

          {/* Profile Route */}
          <Route
            path="/profile-jobseeker"
            element={
              <Layout>
                <ProfileJobSeeker />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
