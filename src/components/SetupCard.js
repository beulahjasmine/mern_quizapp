import React, { useState } from "react";

export default function SetupCard({ onStart, maxQuestions }) {
  const [numQuestions, setNumQuestions] = useState(Math.min(5, maxQuestions));

  const handleStart = () => {
    onStart(numQuestions);
  };

  return (
    <div className="card">
      <h2>Aptitude Quiz</h2>
      <p>Pick the number of questions to begin.</p>
      
      <label>
        Number of Questions: 
        <input
          type="number"
          min="1"
          max={maxQuestions}
          value={numQuestions}
          onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        />
      </label>
      
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
}
