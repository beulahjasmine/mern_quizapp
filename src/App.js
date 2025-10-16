import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuizDashboard from "./components/QuizDashboard";
import PastQuizzes from "./components/PastQuizzes";
import UpcomingQuizzes from "./components/UpcomingQuizzes";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import QuizDetails from "./components/QuizDetails";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <div style={styles.main}>
          <Routes>
            <Route path="/" element={<QuizDashboard />} />
            <Route path="/past-quizzes" element={<PastQuizzes />} />
            <Route path="/upcoming-quizzes" element={<UpcomingQuizzes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/past-quizzes/:id" element={<QuizDetails />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
};
