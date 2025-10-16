import React, { useState } from "react";

function QuizDashboard() {
  const [questions, setQuestions] = useState(15);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Quiz Dashboard</h2>
        <p>Welcome! Ready to test your knowledge?</p>

        <label htmlFor="questions">Select number of questions:</label>
        <select
          id="questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          style={styles.select}
        >
          {[5, 10, 15, 20, 25].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <button style={styles.button}>Start Quiz</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    marginBottom: "15px",
  },
  select: {
    width: "100%",
    padding: "8px",
    margin: "15px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default QuizDashboard;
