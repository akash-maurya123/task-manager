import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(API_BASE);
    setTasks(res.data);
  };

  const addTask = async (title) => {
    await axios.post(API_BASE, { title });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4">Task Manager</h2>
          <TaskForm onAdd={addTask} />
          <hr />
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
