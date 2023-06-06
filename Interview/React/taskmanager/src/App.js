import React, { useState } from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Route
        path="/login"
        element={
          loggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          loggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Router>
  );
};

export default App;
