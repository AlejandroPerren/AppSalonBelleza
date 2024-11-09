import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authToken) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [authToken]);

  if (loading) return <div>Cargando...</div>;

  if (!authToken) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
