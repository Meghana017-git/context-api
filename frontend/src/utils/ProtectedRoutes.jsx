import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { User } = useContext(UserContext);
  if (!User) {
    return <Navigate to="/" />;
  }
  return children;
}
