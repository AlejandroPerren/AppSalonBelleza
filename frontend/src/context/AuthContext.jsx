import { createContext, useState, useContext, useEffect } from 'react';

// Crea el contexto
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  // Cargar datos del usuario y token desde localStorage al cargar la app
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser && storedToken) {
      setUser(storedUser);
      setAuthToken(storedToken);
    }
  }, []);

  // Función para establecer el token y los datos del usuario
  const setAuthData = (userData, token) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('authToken', token);
    setUser(userData);
    setAuthToken(token);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, authToken, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  return context;
};
