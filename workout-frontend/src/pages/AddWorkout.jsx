import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddWorkout.css";

function AddWorkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    sets: "",
    weight: "",
    date: "",
    notes: "",
    duration: "",
    type: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:8000/api/workouts", formData);
      navigate("/workouts"); // redirect to workouts list
    } catch (err) {
      console.error("Error saving workout:", err.response?.data || err.message);
      setError("Failed to save workout.");
    }
  };

  return (
    <div className="add-workout-container">
      <h2>Add Workout</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="add-workout-form">
        <input name="name" placeholder="Workout Name" onChange={handleChange} required />
        <input name="type" placeholder="Type" onChange={handleChange} required />
        <input name="reps" placeholder="Reps" type="number" onChange={handleChange} required />
        <input name="sets" placeholder="Sets" type="number" onChange={handleChange} required />
        <input name="weight" placeholder="Weight (kg)" type="number" onChange={handleChange} required />
        <input name="duration" placeholder="Duration (min)" type="number" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default AddWorkout;



