import React, { useContext } from 'react';
import { GeneralContext } from '../../context/generalContext';

const NavBar = () => {
    const { activeSection, setActiveSection } = useContext(GeneralContext);
    const isAdmin = false; 
    const buttonClass = 'uppercase w-full p-4 transition-colors duration-300';

    return (
        <div>
            {isAdmin ? (
                <div >
                    <button
                        className={`${buttonClass} ${activeSection === 'citas' ? 'bg-white text-cyan-600' : 'bg-cyan-600 hover:bg-white hover:text-cyan-600'}`}
                        onClick={() => setActiveSection('citas')}
                    >
                        Citas
                    </button>
                    <button
                        className={`${buttonClass} ${activeSection === 'servicios' ? 'bg-white text-cyan-600' : 'bg-cyan-600 hover:bg-white hover:text-cyan-600'}`}
                        onClick={() => setActiveSection('servicios')}
                    >
                        Nuestros Servicios
                    </button>
                </div>
            ) : (
                <div className='bg-cyan-600 flex mx-4 justify-around text-center w-full my-16'>
                    <button
                        className={`${buttonClass} ${activeSection === 'servicios' ? 'bg-white text-cyan-600' : 'hover:bg-white hover:text-cyan-600'}`}
                        onClick={() => setActiveSection('servicios')}
                    >
                        Servicios
                    </button>
                    <button
                        className={`${buttonClass} ${activeSection === 'citaInfo' ? 'bg-white text-cyan-600' : 'hover:bg-white hover:text-cyan-600'}`}
                        onClick={() => setActiveSection('citaInfo')}
                    >
                        Información Cita
                    </button>
                    <button
                        className={`${buttonClass} ${activeSection === 'resumen' ? 'bg-white text-cyan-600' : 'hover:bg-white hover:text-cyan-600'}`}
                        onClick={() => setActiveSection('resumen')}
                    >
                        Resumen
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
