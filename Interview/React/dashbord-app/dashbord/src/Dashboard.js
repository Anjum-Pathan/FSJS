// Dashboard.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Apply theme-specific styles
  const containerStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
