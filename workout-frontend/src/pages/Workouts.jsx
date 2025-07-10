import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./WorkoutList.css";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch workouts on page load
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/workouts")
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
        setError("Failed to load workouts.");
      });
  }, []);

  // Delete workout
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/workouts/${id}`);
      setWorkouts(workouts.filter((w) => w.id !== id));
    } catch (error) {
      console.error("Failed to delete workout:", error);
      alert("Error deleting workout.");
    }
  };

  // Redirect to edit page with workout data
  const handleEdit = (workout) => {
    navigate(`/edit-workout/${workout.id}`, { state: workout });
  };

  return (
    <div className="workout-list-container">
      <header className="workout-header">
        <h1>My Workouts</h1>
        <Link to="/add-workout" className="add-button">
          + Add Workout
        </Link>
      </header>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="workout-grid">
        {workouts.length === 0 ? (
          <p>No workouts yet , Click the button to add one!</p>
        ) : (
          workouts.map((workout) => (
            <div key={workout.id} className="workout-card">
              <h2>{workout.name}</h2>
              <p><strong>Type:</strong> {workout.type}</p>
              <p><strong>Reps:</strong> {workout.reps} | <strong>Sets:</strong> {workout.sets}</p>
              <p><strong>Weight:</strong> {workout.weight}kg</p>
              <p><strong>Duration:</strong> {workout.duration} min</p>
              <p><strong>Date:</strong> {workout.date}</p>

              <div className="workout-actions">
                <button onClick={() => handleEdit(workout)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(workout.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Workouts;



