import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workouts from "./pages/Workouts";
import AddWorkout from "./pages/AddWorkout";
import axios from "axios";
import './styles/theme.css';
import EditWorkout from "./pages/EditWorkout"; 

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/workouts", { withCredentials: true })
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error("Failed to fetch workouts:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workouts" element={<Workouts workouts={workouts} />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/edit-workout/:id" element={<EditWorkout />} />
      </Routes>
    </Router>
  );
}

export default App;











