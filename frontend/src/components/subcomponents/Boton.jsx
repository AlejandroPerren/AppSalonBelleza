import React, { useContext } from 'react';
import { GeneralContext } from '../../context/generalContext';

const Boton = () => {
    const { activeSection, setActiveSection } = useContext(GeneralContext);

    return (
        <div className='flex justify-between w-full my-16'>
            {activeSection === 'servicios' && (
                <div className='ml-auto'> 
                    <button
                        className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600'
                        onClick={() => setActiveSection('citaInfo')}
                    >
                        Siguiente &gt;&gt;
                    </button>
                </div>
            )}
           
            {activeSection === 'citaInfo' && (
                <>
                    <button
                        className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600'
                        onClick={() => setActiveSection('servicios')}
                    >
                        &lt;&lt; Anterior
                    </button>
                    <button
                        className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600 ml-auto' // Alinea el botón "Siguiente" a la derecha
                        onClick={() => setActiveSection('resumen')}
                    >
                        Siguiente &gt;&gt;
                    </button>
                </>
            )}

           
            {activeSection === 'resumen' && (
                <button
                    className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600'
                    onClick={() => setActiveSection('citaInfo')}
                >
                    &lt;&lt; Anterior
                </button>
            )}
        </div>
    );
};

export default Boton;