import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const storedToken = localStorage.getItem('authToken');

    if (storedUser && storedToken) {
      setUser(storedUser);
      setAuthToken(storedToken);
    }
  }, []);

  const setAuthData = (userData, token) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('authToken', token);
    setUser(userData);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    setUser(null);
    setAuthToken(null);
  };

  const isAdmin = user?.rol === 'admin';

  return (
    <AuthContext.Provider value={{ user, authToken, setAuthData, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  return context;
};
