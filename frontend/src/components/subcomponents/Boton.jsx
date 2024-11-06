import React, { useContext } from 'react';
import { GeneralContext } from '../../context/generalContext';
import AddService from './AddService';

const Boton = () => {
    const { activeSection, setActiveSection, isAdmin } = useContext(GeneralContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(SummaryApi.createServices.url, {
            method: SummaryApi.createServices.method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (result.success) {
            toast.success(result.message);
            handleClose();
          } else {
            toast.error("Error al Crear el Producto, intente de nuevo por favor");
            console.log(result.message);
          }
        } catch (error) {
          toast.error("Hubo un problema con el servidor.");
          console.error("Error:", error);
        }
      };
    return (
        <div className='flex justify-between w-full my-16'>
            {isAdmin ? (
                <>
                    {activeSection === 'servicios' && (
                        <>
                            <AddService />
                            <button
                                className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600'
                                onClick={() => setActiveSection('citas')}
                            >
                                Siguiente &gt;&gt;
                            </button>

                        </>
                    )}
                    {activeSection === 'citas' && (
                        <button
                            className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600'
                            onClick={() => setActiveSection('servicios')}
                        >
                            &lt;&lt; Anterior
                        </button>
                    )}
                </>
            ) : (
                <>
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
                                className='bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600 ml-auto'
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
                </>
            )}
        </div>
    );
};

export default Boton;
