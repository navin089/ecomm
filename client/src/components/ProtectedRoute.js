import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = sessionStorage.getItem("user");
  return (
    user ? children : <Navigate to="/" />
  );
}

export default PrivateRoute