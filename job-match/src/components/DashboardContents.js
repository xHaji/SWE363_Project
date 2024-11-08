import React from 'react';
import './DashboardContents.css'; // Create a CSS file for styling

const DashboardContents = () => {
  return (
    <div className="dashboard-contents">
      <div className="metrics">
        <div className="metric-card">Job Postings: 200 <span className="change">+2.5%</span></div>
        <div className="metric-card">Total Applications: 100 <span className="change negative">-4.4%</span></div>
        <div className="metric-card">No of Meetings: 50 <span className="change">+1.5%</span></div>
        <div className="metric-card">No of Hirings: 8 <span className="change">+4.5%</span></div>
      </div>
      <div className="charts">
        {/* Add chart components here */}
        <div className="chart">Application Response Chart</div>
        <div className="chart">Org Recent Job Postings</div>
      </div>
    </div>
  );
};

export default DashboardContents;
