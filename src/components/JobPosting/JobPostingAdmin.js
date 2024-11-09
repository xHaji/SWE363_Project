import React, { useState } from 'react';
import './JobPostingAdmin.css';
import Banner from '../../assets/banner.png';
import Logo from '../../assets/google.png';
const JobPostingAdmin = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    shiftSalary: '',
    jobInfo: '',
    requirements: '',
    keyResponsibilities: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div className="header-left">
          <h1>Job Postings</h1>
        </div>
      </div>

      <div className="banner">
          <img src={Banner} alt="JobMatch banner" className="banner" />
        </div>

      <div className="job-content">
        <div className="job-details">
          <div className="job-header">
            <h2>Software Engineer</h2>
            <span className="job-type">FULL TIME</span>
            <span className="salary">Salary: $20,000 - $25,000</span>
          </div>

          <div className="company-details">
            <img src={Logo} alt="Google Inc." className="company-logo" />
            <div className="company-info">
              <h3>Google Inc.</h3>
              <p>📍 Dammam, Saudi Arabia</p>
            </div>
          </div>

          <div className="job-sections">
            <div className="section">
              <h4>Job Info: Text Here</h4>
            </div>
            <div className="section">
              <h4>Requirements: Text Here</h4>
            </div>
            <div className="section">
              <h4>Key Responsibilities: Text Here</h4>
            </div>
          </div>
        </div>

        <div className="modifications-panel">
          <h3>Modifications</h3>
          <form onSubmit={handleSubmit}>
            <div className="mod-input-group">
              <label>
                <span>⭐ Job title</span>
                <div className="input-with-badge">
                  <input 
                    type="text" 
                    placeholder="Note here"
                    value={jobDetails.jobTitle}
                    onChange={(e) => setJobDetails({...jobDetails, jobTitle: e.target.value})}
                  />
                  <span className="badge">0 A</span>
                </div>
              </label>
            </div>

            <div className="mod-input-group">
              <label>
                <span>⭐ Shift - Salary</span>
                <div className="input-with-badge">
                  <input 
                    type="text" 
                    placeholder="Note here"
                    value={jobDetails.shiftSalary}
                    onChange={(e) => setJobDetails({...jobDetails, shiftSalary: e.target.value})}
                  />
                  <span className="badge">0 A</span>
                </div>
              </label>
            </div>

            <div className="mod-input-group">
              <label>
                <span>⭐ Job info</span>
                <div className="input-with-badge">
                  <input 
                    type="text" 
                    placeholder="Note here"
                    value={jobDetails.jobInfo}
                    onChange={(e) => setJobDetails({...jobDetails, jobInfo: e.target.value})}
                  />
                  <span className="badge">0 A</span>
                </div>
              </label>
            </div>

            <div className="mod-input-group">
              <label>
                <span>⭐ Requirements</span>
                <div className="input-with-badge">
                  <input 
                    type="text" 
                    placeholder="Note here"
                    value={jobDetails.requirements}
                    onChange={(e) => setJobDetails({...jobDetails, requirements: e.target.value})}
                  />
                  <span className="badge">0 A</span>
                </div>
              </label>
            </div>

            <div className="mod-input-group">
              <label>
                <span>⭐ Key Responsibilities</span>
                <div className="input-with-badge">
                  <input 
                    type="text" 
                    placeholder="Note here"
                    value={jobDetails.keyResponsibilities}
                    onChange={(e) => setJobDetails({...jobDetails, keyResponsibilities: e.target.value})}
                  />
                  <span className="badge">0 A</span>
                </div>
              </label>
            </div>

            <div className="button-group">
              <button type="submit" className="publish-btn">Publish</button>
              <button type="button" className="delete-btn">Delete</button>
            </div>
          </form>
        </div>
      </div>

      <div className="pagination">
        <button className="prev">←</button>
        <button className="active">01</button>
        <button>02</button>
        <button>03</button>
        <button>04</button>
        <button>05</button>
        <button className="next">→</button>
      </div>
    </div>
  );
};

export default JobPostingAdmin; 