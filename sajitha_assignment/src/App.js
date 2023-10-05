// App.js
import React from 'react';
import './App.css';
import ActivityFeed from './components/ActivityFeed'; // Import the ActivityFeed component
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="left-content">
          <TaskList />
        </div>
        <div className="right-content">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
