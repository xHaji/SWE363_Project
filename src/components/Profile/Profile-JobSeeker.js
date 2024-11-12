// Profile.js
// Profile-JobSeeker.js
import React from 'react';
import './Profile-JobSeeker.css';
import Banner from '../../assets/banner.png';

const Profile = () => {
  const skills = [
    { name: 'Cybersecurity', rating: 4.0 },
    { name: 'Web Development', rating: 3.5 },
    { name: 'Adobe Photoshop', rating: 4.5 },
    { name: 'Microsoft Excel', rating: 5.0 },
  ];

  const languages = [
    { name: 'English', proficiency: 90 },
    { name: 'Spanish', proficiency: 70 },
    { name: 'French', proficiency: 50 },
  ];

  const studies = [
    'Harvard University - Bachelor of Science',
    'MIT - Master of Computer Science',
    'Stanford University - PhD in Cybersecurity',
  ];

  return (
    <div className="profile-container">
      {/* Banner Section */}
      <div className="cover-image">
        <img src={Banner} alt="Banner" className="cover-img" />
        <div className="profile-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80" 
            alt="Profile" 
            className="profile-img" 
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        {/* My Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div className="skill-circle" key={index}>
                <div className="circle" style={{ '--percentage': `${(skill.rating / 5) * 100}%` }}>
                  <span className="circle-text">{skill.rating}</span>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages and Studies Section */}
        <div className="additional-info">
          <div className="language-section">
            <h2 className="section-title">Languages</h2>
            {languages.map((language, index) => (
              <div className="language-bar" key={index}>
                <p>{language.name}</p>
                <div className="bar">
                  <div className="progress" style={{ width: `${language.proficiency}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="studies-section">
            <h2 className="section-title">Studies</h2>
            <div className="studies">
              {studies.map((study, index) => (
                <p key={index}>{study}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
