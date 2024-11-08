import React from 'react';
import './Profile.css';
import Banner from '../../assets/HeaderPhoto.png';
import GoogleLogo from '../../assets/google.png';

const Profile = () => {
  const stats = [
    { title: 'Job Postings', value: 70, change: '+2.5%', trend: 'up' },
    { title: 'Total Applications', value: 20, change: '-4.4%', trend: 'down' },
    { title: 'No of Meetings', value: 33, change: '+1.5%', trend: 'up' },
    { title: 'No of Hirings', value: 3, change: '+4.5%', trend: 'up' },
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>User Activity</h1>
        <div className="header-icons">
          <button className="icon-button">🔍</button>
          <button className="icon-button">🔔</button>
          <button className="icon-button">⚙️</button>
        </div>
      </div>

      <div className="banner-container">
        <img src={Banner} alt="Company banner" className="banner-image" />
      </div>

      <div className="company-info-section">
        <div className="company-header">
          <img src={GoogleLogo} alt="Google Inc." className="company-logo" />
          <div className="company-details">
            <h2>Google Inc.</h2>
            <p className="location">📍 SA</p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <div className={`stat-trend ${stat.trend}`}>
                  <span className="trend-graph">
                    {stat.trend === 'up' ? '📈' : '📉'}
                  </span>
                  <span className="trend-value">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="company-description">
          <div className="description-section">
            <h3>About;</h3>
            <p>....</p>
          </div>
          <div className="description-section">
            <h3>Vision;</h3>
            <p>....</p>
          </div>
          <div className="description-section">
            <h3>Goals;</h3>
            <p>....</p>
          </div>
          <div className="description-section">
            <h3>Experiences;</h3>
            <p>....</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="delete-btn">Delete</button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
