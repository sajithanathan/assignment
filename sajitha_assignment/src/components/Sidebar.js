// Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Acmy Solution</h2>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>Dashboard</li>
          {/* Add other sidebar tabs here */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

