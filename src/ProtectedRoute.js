// src/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token"); // Adjust based on your auth logic
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
