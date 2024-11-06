// src/components/Dashboard/Dashboard.js
import React from 'react';
import Metrics from '../Metrics/Metrics';
import ApplicationChart from '../ApplicationChart/ApplicationChart';
import JobPostings from '../JobPostings/JobPostings';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Main Metrics Section */}
      <div className="metrics-container">
        <Metrics title="Job Postings" count="200" percentage="+2.5" trend="up" />
        <Metrics title="Total Applications" count="100" percentage="-4.4" trend="down" />
        <Metrics title="No of Meetings" count="50" percentage="+1.5" trend="up" />
        <Metrics title="No of Hirings" count="8" percentage="+4.5" trend="up" />
      </div>

      {/* Application Chart Section */}
      <div className="chart-container">
        <ApplicationChart />
      </div>

      {/* Job Postings Table Section */}
      <div className="job-postings-container">
        <JobPostings />
      </div>
    </div>
  );
}

export default Dashboard;
