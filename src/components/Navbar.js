// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>QuizApp</Link>
      </div>

      <div style={styles.links}>
        {/* Public Links */}
        {!isLoggedIn && (
          <>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/signup">Signup</Link>
          </>
        )}

        {/* Protected Links */}
        {isLoggedIn && (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <Link style={styles.link} to="/past-quizzes">Past Quizzes</Link>
            <Link style={styles.link} to="/upcoming-quizzes">Upcoming Quizzes</Link>
            <Link style={styles.link} to="/profile">Profile</Link>
            <Link style={styles.link} to="/leaderboard">Leaderboard</Link>
          </>
        )}

        {/* Always Visible */}
        <Link style={styles.link} to="/settings">Settings</Link>

        {/* Logout */}
        {isLoggedIn && (
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2575fc",
    color: "#fff",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.3em",
  },
  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: "#ff4d4f",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "bold",
  },
};
