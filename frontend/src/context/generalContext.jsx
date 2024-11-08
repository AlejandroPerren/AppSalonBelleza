import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('servicios');
    const [isAdmin, setIsAdmin] = useState(true); 
    const [isLogg, setISLogg] = useState(true);

    return (
        <GeneralContext.Provider value={{ activeSection, setActiveSection, isAdmin, setIsAdmin }}>
            {children}
        </GeneralContext.Provider>
    );
};
