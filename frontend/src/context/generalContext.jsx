import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('servicios');
    const [selectedServices, setSelectedServices] = useState([]); 
    const [appointmentData, setAppointmentData] = useState({
        nombre: '',
        fecha: '',
        hora: ''
    }); 

    const updateSelectedServices = (service) => {
        setSelectedServices((prevServices) => {
            if (prevServices.find((s) => s.id === service.id)) {
                return prevServices.filter(s => s.id !== service.id);
            } else {
                return [...prevServices, service];
            }
        });
    };


    const updateAppointmentData = (data) => {
        setAppointmentData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <GeneralContext.Provider value={{
            activeSection,
            setActiveSection,
            selectedServices,
            updateSelectedServices,
            appointmentData,
            updateAppointmentData
        }}>
            {children}
        </GeneralContext.Provider>
    );
};
