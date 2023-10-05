// TaskList.js
import React from 'react';
import './TaskList.css';

// Sample tasks data with the provided tasks
const tasks = [
  { text: 'Contract #00124 need John Beige’s signature', status: 'Done', date: 'Sep 16' },
  { text: 'Franklin More’s professional review is pending', status: 'Done', date: 'Sep 12' },
  { text: 'Internship Agreement template is not completed', status: 'Done', date: 'Sep 10' },
  { text: 'Contract #2564 need Charlie Puth’s signature', status: 'In-Progress', date: 'Sep 08' },
  { text: 'David Gram’s professional review is pending', status: 'Done', date: 'Sep 08' },
  { text: 'Contract #2564 need Charlie Puth’s signature', status: 'In-Progress', date: 'Sep 08' },
  { text: 'Franklin More’s professional review is pending', status: 'Done', date: 'Sep 06' },
  { text: 'Internship Agreement template is not completed', status: 'Done', date: 'Sep 06' },
  { text: 'Franklin More’s professional review is pending', status: 'Done', date: 'Sep 04' },
];

function TaskList() {
  return (
    <div className="task-list">
    {/* Welcome Message and Information Box */}
    <div className="welcome-box">
      <h2>Welcome back, John Doe</h2>
      <p>
        The end of the year is coming. Are you planning your performance interviews?
        You can do this super efficiently with Acmy. </p>
       <u color='purple'> Look here for more information.</u>
      
    </div>

    {/* Task List */}
    <h2>Task List</h2>
    <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="bell-icon">🔔</span>
            {task.text} ({task.date})
            <div className="task-buttons">
              {task.status === 'Done' ? (
                <button className="done-button">Done</button>
              ) : (
                <button className="progress-button">In Progress</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
