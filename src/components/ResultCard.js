import React from "react";

export default function ResultsCard({ score, total, questions, onRestart, onReset }) {
  const percentage = Math.round((score / total) * 100);
  let message;

  if (percentage === 100) message = "Perfect score! Excellent work!";
  else if (percentage >= 70) message = "Great job! You did really well!";
  else if (percentage >= 40) message = "Good try! Keep practicing!";
  else message = "Don’t worry, you’ll do better next time!";

  return (
    <div className="card">
      <h2>Quiz Results</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong> ({percentage}%)
      </p>
      <p>{message}</p>

      <h3>Review Questions</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="review-question">
          <p><strong>Q{idx + 1}:</strong> {q.prompt}</p>
          <ul>
            {q.options.map((opt, i) => (
              <li
                key={i}
                style={{
                  color: i === q.answerIndex ? "green" : "black",
                  fontWeight: i === q.answerIndex ? "bold" : "normal"
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="actions">
        <button onClick={onRestart}>Play Again</button>
        <button onClick={onReset}>HomePage</button>
      </div>
    </div>
  );
}
