import React from 'react';
import { FaArchive } from 'react-icons/fa'; // Existing icons
import { RxDashboard } from 'react-icons/rx';
import { MdMessage, MdOutlineTouchApp } from 'react-icons/md';
import { ImExit } from 'react-icons/im'; // Import the new exit icon
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li>
          <a href="#">
            <RxDashboard className="nav-icon" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaArchive className="nav-icon" /> Saved Jobs
          </a>
        </li>
        <li>
          <a href="#">
            <MdMessage className="nav-icon" /> Messages
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineTouchApp className="nav-icon" /> Applications
          </a>
        </li>
        <li>
          <a href="#" className="sign-out">
            <ImExit className="nav-icon" /> Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

  