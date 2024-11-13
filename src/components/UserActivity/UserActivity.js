import React from 'react';
import './UserActivity.css';
import banner from '../../assets/banner.png';

const UserActivity = () => {
  const stats = [
    { title: 'Job Postings', value: 200, change: '+2.5%', trend: 'up' },
    { title: 'Total Applications', value: 100, change: '-4.4%', trend: 'down' },
    { title: 'No of Meetings', value: 50, change: '+1.5%', trend: 'up' },
    { title: 'No of Hirings', value: 8, change: '+4.5%', trend: 'up' },
  ];

  const employers = [
    { name: 'Google Inc.', sees: '0 See', link: 'See more' },
    { name: 'Microsoft Inc.', sees: '0 See', link: 'See More' },
    { name: 'Aramco Inc.', sees: '0 See', link: 'See More' },
  ];

  const jobSeekers = [
    { name: 'Abosager', sees: '0 See', link: 'See more' },
    { name: 'The guy', sees: '0 See', link: 'See more' },
    { name: 'Programmer', sees: '0 See', link: 'See More' },
  ];

  return (
    <div className="user-activity">
      <div className="activity-header">
      </div>

      <div className="banner">
          <img src={banner} alt="JobMatch banner" className="banner" />
        </div>


      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-header">
              <span>{stat.title}</span>
              <div className={`trend-line ${stat.trend}`}>
                {/* Add SVG trend line here */}
              </div>
            </div>
            <div className="stat-content">
              <h2>{stat.value}</h2>
              <span className={`change ${stat.trend}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="users-grid">
        <div className="users-section">
          <h3>Users</h3>
          <div className="user-type">Employers</div>
          <div className="user-list">
            {employers.map((employer, index) => (
              <div className="user-item" key={index}>
                <div className="user-info">
                  <span className="star-icon">⭐</span>
                  <span className="name">{employer.name}</span>
                </div>
                <div className="user-stats">
                  <span className="sees">{employer.sees}</span>
                  <a href="#" className="see-more">{employer.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="users-section">
          <h3>Users</h3>
          <div className="user-type">Job Seekers</div>
          <div className="user-list">
            {jobSeekers.map((seeker, index) => (
              <div className="user-item" key={index}>
                <div className="user-info">
                  <span className="star-icon">⭐</span>
                  <span className="name">{seeker.name}</span>
                </div>
                <div className="user-stats">
                  <span className="sees">{seeker.sees}</span>
                  <a href="#" className="see-more">{seeker.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;