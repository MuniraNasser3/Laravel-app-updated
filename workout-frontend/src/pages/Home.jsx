import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Healthy Workout Life</h1>
      <p className="description">
        Your personal fitness tracker and motivator 💪
      </p>

      <div className="card">
        <h2>Welcome!</h2>
        <p>Track your workouts, monitor progress, and stay strong!</p>
        <button onClick={() => setShowButtons(true)}>Get Started</button>

        {showButtons && (
          <div style={{ marginTop: "1rem" }}>
            <button onClick={() => navigate("/login")}>Sign In</button>
            <button onClick={() => navigate("/register")} style={{ marginLeft: "1rem" }}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

