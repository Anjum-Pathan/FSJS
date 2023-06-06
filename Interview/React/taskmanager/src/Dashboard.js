// Dashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Dashboard = ({ handleLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data.tasks);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await axios.post("/api/tasks", task);
      setTasks([...tasks, response.data.task]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm createTask={createTask} />
      {loading ? <div>Loading...</div> : <TaskList tasks={tasks} />}
    </div>
  );
};

export default Dashboard;
