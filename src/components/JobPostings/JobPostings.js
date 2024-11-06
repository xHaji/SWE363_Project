// src/components/JobPostings/JobPostings.js
import React from 'react';
import './JobPostings.css';

function JobPostings() {
  const jobs = [
    { title: 'UI/UX Designer', category: 'Full Time', openings: 12, applications: 135, status: 'Active' },
    { title: 'Full Stack Dev', category: 'Full Time', openings: 8, applications: 100, status: 'Inactive' },
  ];

  return (
    <div className="job-postings">
      <h3>Org Recent Job Postings</h3>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Openings</th>
            <th>Applications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>{job.openings}</td>
              <td>{job.applications}</td>
              <td className={job.status === 'Active' ? 'active' : 'inactive'}>
                {job.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobPostings;
