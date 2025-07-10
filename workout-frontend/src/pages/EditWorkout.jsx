import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./AddWorkout.css"; 

function EditWorkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

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

  useEffect(() => {
    
    if (location.state) {
      setFormData(location.state);
    } else {
      axios
        .get(`http://localhost:8000/api/workouts/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => {
          console.error("Failed to fetch workout:", err);
          setError("Workout not found.");
        });
    }
  }, [id, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.put(`http://localhost:8000/api/workouts/${id}`, formData);
      navigate("/workouts");
    } catch (err) {
      console.error("Error updating workout:", err.response?.data || err.message);
      setError("Failed to update workout.");
    }
  };

  if (!formData.name) {
    return <p style={{ color: "white", textAlign: "center" }}>No workout selected.</p>;
  }

  return (
    <div className="add-workout-container">
      <h2>Edit Workout</h2>
      <form onSubmit={handleSubmit} className="add-workout-form">
        <input name="name" placeholder="Workout Name" value={formData.name} onChange={handleChange} required />
        <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
        <input name="reps" placeholder="Reps" type="number" value={formData.reps} onChange={handleChange} required />
        <input name="sets" placeholder="Sets" type="number" value={formData.sets} onChange={handleChange} required />
        <input name="weight" placeholder="Weight (kg)" type="number" value={formData.weight} onChange={handleChange} required />
        <input name="duration" placeholder="Duration (min)" type="number" value={formData.duration} onChange={handleChange} required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <textarea name="notes" placeholder="Notes" value={formData.notes || ""} onChange={handleChange}></textarea>
        <button type="submit">Update Workout</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default EditWorkout;


