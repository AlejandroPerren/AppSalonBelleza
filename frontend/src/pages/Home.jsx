import React, { useState } from 'react';
import Header from '../components/subcomponents/Header';
import NavBar from '../components/subcomponents/NavBar';
import Services from '../components/Services';

const Home = () => {
    const [activeSection, setActiveSection] = useState('');

    const renderComponent = () => {
        switch (activeSection) {
            case 'citas':
                return (
                    <h1>Hola</h1>
                )
            case 'cita':
                    return (
                        <h1>Hola</h1>
                    )
            case 'resumen':
                return (
                    <h1>Hola</h1>
                )
            case 'services':
                return <Services />;
            default:
                return null;
        }
    };

    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className='flex items-center justify-center'>
                <img src="../../public/1.jpg" className='w-full h-full object-cover' alt="Background" />
            </div>

            <div>
                <Header />
                <main className='flex justify-center flex-col text-center'>
                    <NavBar setActiveSection={setActiveSection} />

                    <div>
                        {renderComponent()}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
