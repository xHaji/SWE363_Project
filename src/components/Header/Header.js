import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaSearch, FaBell, FaCog, FaUser } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Header.css';
import logo from '../../assets/applogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ userType }) => {
  const [isGlobeDropdownOpen, setGlobeDropdownOpen] = useState(false);
  const [isRegionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('SA');
  const [isDarkMode, setDarkMode] = useState(false);

  const dropdownContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setGlobeDropdownOpen(false);
        setRegionDropdownOpen(false);
        setNotificationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (dropdownType) => {
    setGlobeDropdownOpen(dropdownType === 'globe' ? !isGlobeDropdownOpen : false);
    setNotificationDropdownOpen(
      dropdownType === 'notification' ? !isNotificationDropdownOpen : false
    );
    setRegionDropdownOpen(
      dropdownType !== 'globe' && dropdownType !== 'notification'
        ? isRegionDropdownOpen
        : false
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setRegionDropdownOpen(false);
  };

  const handleSettingsClick = () => {
    if (userType === 'employee') {
      navigate('/settings-employer');
    } else if (userType === 'jobseeker') {
      navigate('/settings-jobseeker');
    }
  };

  const handleSearchClick = () => {
    if (userType === 'admin') {
      navigate('/search-admin', { state: { userType } });
    } else if (userType === 'jobseeker') {
      navigate('/search-jobseeker', { state: { userType } });
    }
  };

  const handleProfileClick = () => {
    if (userType === 'jobseeker') {
      navigate('/profile-jobseeker', { state: { userType } });
    }
  };

  const getPageTitle = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/search-admin':
        return 'Search Jobs';
      case '/search-jobseeker':
        return 'Jobs';
      case '/settings-employer':
        return 'Settings';
      case '/settings-jobseeker':
        return 'Settings';
      case '/profile-jobseeker':
        return 'Profile';
      case '/JobPostingAdmin':
        return 'Job Posting';
      case '/UserActivity':
        return 'User Activity';
      case '/SystemPerformance':
        return 'System Performance';
      case '/JobPosting':
        return 'Job Posting';
      case '/MessageEmployers':
        return 'Message';
      case '/MessageJobSeekers':
        return 'Message';
      case '/ApplicationEmployers':
        return 'Application';
      case '/SavedJobs':
        return 'Saved Jobs'
      case '/ApplicationJobseekers':
        return 'Application';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="header">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo_header" />
        {userType === 'jobseeker' && (
          <FaUser 
            className="icon" 
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      <h1 className="title">{getPageTitle()}</h1>
      <div className="right-section" ref={dropdownContainerRef}>
        <FaGlobe className="icon" onClick={() => toggleDropdown('globe')} />
        {isGlobeDropdownOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item region-toggle"
              onClick={() => setRegionDropdownOpen(!isRegionDropdownOpen)}
            >
              <span>Region: {selectedRegion}</span>
              <MdKeyboardArrowRight
                className={`arrow-icon ${isRegionDropdownOpen ? 'open' : ''}`}
              />
            </div>
            {isRegionDropdownOpen && (
              <div className="region-list">
                <div className="region-item" onClick={() => handleRegionSelect('SA')}>
                  SA
                </div>
                <div className="region-item" onClick={() => handleRegionSelect('UK')}>
                  UK
                </div>
                <div className="region-item" onClick={() => handleRegionSelect('USA')}>
                  USA
                </div>
              </div>
            )}
            <div className="dropdown-item mode-toggle">
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              <div
                className={`toggle-button ${isDarkMode ? 'active' : ''}`}
                onClick={toggleDarkMode}
              >
                <div className="toggle-circle"></div>
              </div>
            </div>
          </div>
        )}
        {(userType === 'admin' || userType === 'jobseeker') && (
          <FaSearch 
            className="icon" 
            onClick={handleSearchClick}
          />
        )}
        {(userType === 'jobseeker' || userType === 'employee') && (
          <>
            <FaBell className="icon" onClick={() => toggleDropdown('notification')} />
            {isNotificationDropdownOpen && (
              <div className="notification-menu">
                <div className="notification-item">
                  <strong>Job Posted</strong>
                  <p>
                    Amazon company that you are following have posted a new job.
                  </p>
                  <button className="notification-button" onClick={() => window.location.href = '/search-jobseeker'}>Go to the job</button>                </div>
                <div className="notification-item">
                  <strong>Interview Reminder</strong>
                  <p>You have a scheduled interview today at 8 pm.</p>
                </div>
                <div className="notification-item">
                  <strong>Application Update</strong>
                  <p>Your application for Aramco Company has been rejected.</p>
                </div>
              </div>
            )}
          </>
        )}
        {(userType === 'jobseeker' || userType === 'employee') && (
          <FaCog 
            className="icon" 
            onClick={handleSettingsClick} 
          />
        )}
      </div>
    </div>
  );
};

export default Header;