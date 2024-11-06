// src/components/Metrics/Metrics.js
import React from 'react';
import './Metrics.css';

function Metrics({ title, count, percentage, trend }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <div className="metric-details">
        <h2>{count}</h2>
        <p className={trend === 'up' ? 'green' : 'red'}>
          {percentage}%
        </p>
      </div>
    </div>
  );
}

export default Metrics;
