import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/leaderboard" style={styles.link}>Leaderboard</Link>
        <Link to="/upcoming-quizzes" style={styles.link}>Upcoming Quizzes</Link>
        <Link to="/past-quizzes" style={styles.link}>Past Quizzes</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
      <div style={styles.right}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#007BFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  left: {
    display: "flex",
    gap: "30px",
  },
  right: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default Navbar;
