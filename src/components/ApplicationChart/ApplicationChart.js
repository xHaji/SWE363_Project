// src/components/ApplicationChart/ApplicationChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './ApplicationChart.css';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Unemployed', 'Employed', 'Trainee'],
  datasets: [
    {
      data: [42, 8, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function ApplicationChart() {
  return (
    <div className="application-chart">
      <h3>Application Response</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default ApplicationChart;
