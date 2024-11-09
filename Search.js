import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaSearch, FaArrowAltCircleRight } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { CiLocationOn, CiBookmark } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs"; // Import filled bookmark icon
import './Search.css';

const Search = () => {
  const [showJobs, setShowJobs] = useState(false);  // State to control job and pagination visibility
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFindJobClick = () => {
    setShowJobs(true);  // Show job list and pagination when Find Job button is clicked
  };

  return (
    <div className="search-container">
      <SearchBar onFindJobClick={handleFindJobClick} />
      {showJobs && <JobList currentPage={currentPage} />}
      {showJobs && <Pagination currentPage={currentPage} onPageChange={handlePageChange} />}
    </div>
  );
};

const SearchBar = ({ onFindJobClick }) => (
  <div className="search-bar">
    <div style={{ display: "flex", width: "516px", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "4px 8px" }}>
      <FaSearch style={{ marginRight: "8px", color: "#0A65CC" }} />
      <input
        className="search"
        type="text"
        placeholder="Search by: Job title, Position, Keyword..."
        style={{ border: "none", outline: "none", flex: 1 }}
      />
    </div>
    <div style={{ display: "flex", width: "424px", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "4px 8px" }}>
      <CiLocationOn style={{ marginRight: "8px", color: "#0A65CC" }} />
      <input
        className="code"
        type="text"
        placeholder="City, state or zip code"
        style={{ border: "none", outline: "none", flex: 1 }}
      />
    </div>
    <button className="filters"><LiaFilterSolid /> Filters</button>
    <button className="find-job-btn" onClick={onFindJobClick}>Find Job</button>  {/* Button to reveal job list and pagination */}
  </div>
);

const JobCard = ({ title, salary, company, location }) => {
  const [isBookmarked, setIsBookmarked] = useState(false); // State to track bookmark status

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev); // Toggle the bookmark state
  };

  return (
    <div className="job-card">
      <div className="job-card-content">
        <h3>{title}</h3>
        <p>
          <span className="job-type">FULL-TIME</span> Salary: {salary}
        </p>
        <div className="company-info">
          <FcGoogle id="google" />
          <div>
            <p>{company}</p>
            <p><CiLocationOn /> {location}</p>
          </div>
        </div>
      </div>
      <div className="bookmark-icon" onClick={toggleBookmark} style={{ cursor: "pointer" }}>
        {isBookmarked ? <BsBookmarkFill color="#FFD700" /> : <CiBookmark />} {/* Change icon when bookmarked */}
      </div>
    </div>
  );
};

const JobList = ({ currentPage }) => {
  const jobTitles = {
    1: ["Software Engineer", "UI/UX Designer", "Visual Designer", "Product Designer"],
    2: ["Frontend Developer", "Backend Developer", "Project Manager", "Data Analyst"],
    3: ["Marketing Specialist", "Sales Associate", "Content Writer", "SEO Expert"],
    4: ["Graphic Designer", "DevOps Engineer", "Customer Support", "HR Specialist"],
    5: ["Research Scientist", "Game Developer", "Mobile Developer", "IT Consultant"],
  };

  const titles = jobTitles[currentPage] || jobTitles[1];

  return (
    <div className="job-list">
      {titles.map((title, index) => (
        <JobCard
          key={index}
          title={title}
          salary="$20,000 - $25,000"
          company="Google Inc."
          location="Dammam, SA"
        />
      ))}
    </div>
  );
};

const Pagination = ({ currentPage, onPageChange }) => (
  <div className="pagination">
    <button
      className="arrow-btn"
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
    >
      <FaArrowAltCircleLeft />
    </button>
    <ul className="pagination-list">
      {[1, 2, 3, 4, 5].map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)}
          className={`pagination-item ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </li>
      ))}
    </ul>
    <button
      className="arrow-btn"
      onClick={() => onPageChange(Math.min(currentPage + 1, 5))}
      disabled={currentPage === 5}
    >
      <FaArrowAltCircleRight />
    </button>
  </div>
);

export default Search;