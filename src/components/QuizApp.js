import React, { useState } from "react";
import SetupCard from "./SetupCard";
import ResultsCard from "./ResultCard";
import QuestionCard from "./QuestionCard";

import "./styles.css";

const QUESTION_BANK = [
  {
    prompt: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answerIndex: 2
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answerIndex: 1
  },
  {
    prompt: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answerIndex: 1
  },
  {
    prompt: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answerIndex: 3
  },
  {
    prompt: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    answerIndex: 2
  },
  {
    prompt: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answerIndex: 1
  },
  {
    prompt: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answerIndex: 1
  },
  {
    prompt: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "360°", "270°"],
    answerIndex: 1
  },
  {
    prompt: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    answerIndex: 1
  },
  {
    prompt: "If all cats are mammals and all mammals are animals, are all cats animals?",
    options: ["Yes", "No"],
    answerIndex: 0
  },
  {
    prompt: "Choose the synonym of 'happy'",
    options: ["Sad", "Joyful", "Angry", "Upset"],
    answerIndex: 1
  },
  {
    prompt: "What is 7 x 8?",
    options: ["54", "56", "48", "64"],
    answerIndex: 1
  },
  {
    prompt: "Which organ pumps blood through the body?",
    options: ["Lungs", "Heart", "Kidney", "Liver"],
    answerIndex: 1
  },
  {
    prompt: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2
  },
  {
    prompt: "What comes next in the series: 5, 10, 15, 20, ?",
    options: ["25", "30", "35", "40"],
    answerIndex: 0
  },
  {
    prompt: "Which continent is Egypt part of?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answerIndex: 1
  },
  {
    prompt: "Which word is an antonym of 'ancient'?",
    options: ["Old", "Modern", "Historic", "Antique"],
    answerIndex: 1
  },
  {
    prompt: "If you roll a standard die, what is the probability of getting a 4?",
    options: ["1/6", "1/4", "1/3", "1/2"],
    answerIndex: 0
  },
  {
    prompt: "What is 12 ÷ 3?",
    options: ["3", "4", "5", "6"],
    answerIndex: 1
  },
  {
    prompt: "Which famous scientist discovered gravity?",
    options: ["Einstein", "Newton", "Tesla", "Darwin"],
    answerIndex: 1
  },
  {
    prompt: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answerIndex: 2
  },
  {
    prompt: "Find the missing number: 3, 6, 9, ?, 15",
    options: ["10", "11", "12", "13"],
    answerIndex: 2
  },
  {
    prompt: "Which gas is essential for humans to breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answerIndex: 0
  },
  {
    prompt: "Choose the synonym of 'quick'",
    options: ["Slow", "Fast", "Lazy", "Late"],
    answerIndex: 1
  },
  {
    prompt: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
    answerIndex: 0
  },
  {
    prompt: "What is the value of π (pi) up to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answerIndex: 1
  },
  {
    prompt: "If today is Monday, what day will it be 4 days later?",
    options: ["Thursday", "Friday", "Wednesday", "Tuesday"],
    answerIndex: 0
  }, 
  {
    prompt: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answerIndex: 1
  },
  {
    prompt: "What is the next number in the series: 1, 4, 9, 16, ?",
    options: ["20", "25", "24", "30"],
    answerIndex: 1
  },
  {
    prompt: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answerIndex: 0
  },
  {
    prompt: "Choose the antonym of 'brave'",
    options: ["Courageous", "Fearful", "Valiant", "Heroic"],
    answerIndex: 1
  },
  {
    prompt: "If a rectangle has length 8 and width 3, what is its area?",
    options: ["11", "24", "22", "16"],
    answerIndex: 1
  },
  {
    prompt: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Shakespeare", "Tolstoy", "Dante"],
    answerIndex: 0
  },
  {
    prompt: "What is 7 squared?",
    options: ["49", "42", "56", "64"],
    answerIndex: 0
  },
  {
    prompt: "Which organ in the human body filters blood?",
    options: ["Liver", "Kidneys", "Heart", "Lungs"],
    answerIndex: 1
  },
  {
    prompt: "Find the missing letter in the sequence: A, C, E, G, ?",
    options: ["I", "H", "J", "K"],
    answerIndex: 1
  },
  {
    prompt: "Which is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answerIndex: 1
  },
  {
    prompt: "What is 50% of 200?",
    options: ["50", "75", "100", "150"],
    answerIndex: 2
  },
  {
    prompt: "Which is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answerIndex: 1
  },
  {
    prompt: "Solve: 3x + 5 = 20. What is x?",
    options: ["5", "10", "15", "20"],
    answerIndex: 0
  },
  {
    prompt: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "England", "Germany", "Italy"],
    answerIndex: 0
  },
  {
    prompt: "What is the freezing point of water in Fahrenheit?",
    options: ["0°F", "32°F", "100°F", "212°F"],
    answerIndex: 1
  },
  {
    prompt: "Choose the synonym of 'ancient'",
    options: ["Old", "Modern", "New", "Recent"],
    answerIndex: 0
  },
  {
    prompt: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answerIndex: 1
  },
  {
    prompt: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answerIndex: 1
  },
  {
    prompt: "Which element is needed for respiration in humans?",
    options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
    answerIndex: 2
  },
  {
    prompt: "What comes next: 10, 20, 30, ?",
    options: ["35", "40", "50", "45"],
    answerIndex: 1
  }
  
];

export default function QuizApp() {
  const [phase, setPhase] = useState("setup");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0); 

  // start quiz with selected number of questions
  const startQuiz = (questionsCount) => {
    const count = questionsCount || numQuestions; // use previous if undefined
    setNumQuestions(count); // save for "Play Again"
    setQuestions([...QUESTION_BANK].sort(() => Math.random() - 0.5).slice(0, count));
    setPhase("quiz");
    setIndex(0);
    setScore(0);
  };

  const submitAnswer = (choiceIndex) => {
    if (choiceIndex === questions[index].answerIndex) {
      setScore((s) => s + 1);
    }
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else {
      setPhase("results");
    }
  };

  const resetAll = () => {
    setPhase("setup");
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setNumQuestions(0);
  };

  return (
    <div className="quiz-app">
      {phase === "setup" && (
        <SetupCard
          onStart={startQuiz}
          maxQuestions={QUESTION_BANK.length}
        />
      )}

      {phase === "quiz" && questions.length > 0 && (
        <QuestionCard
          question={questions[index]}
          index={index}
          total={questions.length}
          onAnswer={submitAnswer}
        />
      )}

      {phase === "results" && (
        <ResultsCard
          score={score}
          total={questions.length}
          questions={questions}
          onRestart={() => startQuiz()} // will use previous numQuestions
          onReset={resetAll}
        />
      )}
    </div>
  );
}
