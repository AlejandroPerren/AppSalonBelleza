import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('servicios');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
        }
    }, []);

    const login = (token, isAdminStatus) => {
        localStorage.setItem('token', token);
        localStorage.setItem('isAdmin', JSON.stringify(isAdminStatus));
        setIsAuthenticated(true);
        setIsAdmin(isAdminStatus);
        if (navigate) navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        setIsAuthenticated(false);
        setIsAdmin(false);
        if (navigate) navigate('/login');
    };

    return (
        <GeneralContext.Provider value={{ activeSection, setActiveSection, isAdmin, isAuthenticated, login, logout }}>
            {children}
        </GeneralContext.Provider>
    );
};
