import React from 'react';
import './ActivityFeed.css';

// Import the avatar SVG files
import Avatar1 from '../assets/Avatar-1.svg';
import Avatar2 from '../assets/Avatar-2.svg';
import Avatar3 from '../assets/Avatar-3.svg';
import Icon01 from '../assets/icon 01.png';
function ActivityFeed() {
  return (
    <div className="activity-feed-box">
      <div className="upper-box">
        <h2>Activity Feed</h2>

        {/* First Activity Entry */}
        <div className="activity-entry">
          <div className="activity-meta">
            <img src={Avatar1} alt="Avatar 1" className="avatar-icon" />
            <span className="activity-author">Kushantha Charuka</span> created Contract #00124 need John Beige’s signature
            <span className="activity-date">Sep 16, 2022 at 11:30 AM</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque</p>
        </div>

        {/* Second Activity Entry */}
        <div className="activity-entry">
          <div className="activity-meta">
            <img src={Avatar2} alt="Avatar 2" className="avatar-icon" />
            <span className="activity-author">Another Author</span> created Contract #00234
            <span className="activity-date">Sep 16, 2022 at 12:00 PM</span>
          </div>
          <p>Another activity description goes here.</p>
        </div>

        {/* Third Activity Entry */}
        <div className="activity-entry">
          <div className="activity-meta">
            <img src={Avatar3} alt="Avatar 3" className="avatar-icon" />
            <span className="activity-author">Yet Another Author</span> performed some action
            <span className="activity-date">Sep 16, 2022 at 2:00 PM</span>
          </div>
          <p>Yet another activity description goes here.</p>
        </div>

        {/* Add more activity entries as needed */}
      </div>

      {/* Tasks Priorities section */}
      <div className="lower-box">
        <h2>Tasks Priorities</h2>
        <div className="task-priorities">
          {/* Add content for Tasks Priorities */}
          </div>
        {/* Add the image below the Tasks Priorities section */}
        <img src={Icon01} alt="Icon 01" className="icon" />
      </div>
        
      
    </div>
  );
}

export default ActivityFeed;





