import React from 'react';

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-muted">No tasks added yet.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
          {task.title}
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
