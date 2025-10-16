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
import LeaderBoard from "./components/Leaderboard";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import Settings from "./Settings";


export default function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <div style={styles.main}>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} /> 
            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <QuizDashboard />
              </ProtectedRoute>
            } />
            <Route path="/past-quizzes" element={
              <ProtectedRoute>
                <PastQuizzes />
              </ProtectedRoute>
            } />
            <Route path="/upcoming-quizzes" element={
              <ProtectedRoute>
                <UpcomingQuizzes />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/quiz/:id" element={
              <ProtectedRoute>
                <QuizDetails />
              </ProtectedRoute>
            } />
            <Route path="/leaderboard" element={
              <ProtectedRoute>
                <LeaderBoard />
              </ProtectedRoute>
            } />
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
