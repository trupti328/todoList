import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const API_URL = "http://localhost:5000/todo";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
      console.log(res.data);

    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await axios.post(`${API_URL}/task`, task);
    setTasks([...tasks, res.data]);
  };

  const updateTask = async (task) => {
    const res = await axios.put(`${API_URL}/task/${task._id}`, task);
    setTasks(tasks.map(t => t._id === task._id ? res.data : t));
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/task/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const toggleTask = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const res = await axios.put(`${API_URL}/task/${task._id}`, updatedTask);
    setTasks(tasks.map(t => t._id === task._id ? res.data : t));
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={setEditingTask}
        onToggle={toggleTask}
      />

    </div>

  )
}

export default App
