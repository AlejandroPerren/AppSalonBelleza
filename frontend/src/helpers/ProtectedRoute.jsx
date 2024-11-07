// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { GeneralContext } from '../context/generalContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(GeneralContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
