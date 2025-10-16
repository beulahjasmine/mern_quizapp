import React from "react";

export default function QuestionCard({ question, index, total, onAnswer }) {
  return (
    <div className="card">
      <h3>Question {index + 1} of {total}</h3>
      <p>{question.prompt}</p>
      <div className="options">
        {question.options.map((opt, i) => (
          <button key={i} onClick={() => onAnswer(i)}>{opt}</button>
        ))}
      </div>
    </div>
  );
}
