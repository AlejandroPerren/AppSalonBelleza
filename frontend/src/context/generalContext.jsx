import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <GeneralContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </GeneralContext.Provider>
    );
};
