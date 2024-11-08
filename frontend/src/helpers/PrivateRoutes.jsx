import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth(); 
  const location = useLocation();

  if (!authToken) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
