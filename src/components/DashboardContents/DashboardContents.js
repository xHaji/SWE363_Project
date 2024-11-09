import React from 'react';
import './DashboardContents.css';
import Banner from '../../assets/banner.png';
const DashboardContents = () => {
  const metrics = [
    { title: 'Job Postings', value: 200, change: 2.5 },
    { title: 'Total Applications', value: 100, change: -4.4 },
    { title: 'No of Meetings', value: 50, change: 1.5 },
    { title: 'No of Hirings', value: 8, change: 4.5 }
  ];

  return (
    <div className="dashboard-contents">

      <div className="banner">
        <img src={Banner} alt="JobMatch banner" className="banner" />
      </div>
      <div className="metrics">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3 className="metric-title">{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
            <span className={`change ${metric.change < 0 ? 'negative' : 'positive'}`}>
              {metric.change > 0 ? '+' : ''}{metric.change}%
            </span>
          </div>
        ))}
      </div>
      <div className="charts">
        <div className="chart">
          <h3>Application Response Chart</h3>
          {/* Chart component will go here */}
        </div>
        <div className="chart">
          <h3>Org Recent Job Postings</h3>
          {/* Chart component will go here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardContents;
