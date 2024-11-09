import React, { useContext } from 'react';
import { GeneralContext } from '../context/generalContext';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const Resumen = () => {
  const { selectedServices, appointmentData } = useContext(GeneralContext);

  const handleConfirm = async () => {
    try {
      const response = await fetch(SummaryApi.createDates.url, { 
        method: SummaryApi.createDates.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }, 
        body: JSON.stringify({
          services: selectedServices,
          appointment: appointmentData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Cita confirmada exitosamente");
     
      } else {
        toast.error(`Error al confirmar: ${result.message}`);
      }
    } catch (error) {
      toast.error("Ocurrió un error al confirmar la cita");
    }
  };

  return (
    <div className="p-6 bg-white text-cyan-600 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Resumen de Servicios</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Servicios Seleccionados:</h3>
        {selectedServices.length > 0 ? (
          <ul className="list-disc list-inside">
            {selectedServices.map((service) => (
              <li key={service.id} className="py-1">
                {service.nombre} - ${service.precio}
              </li>
            ))}
          </ul>
        ) : (
          <p className='bg-black'>No has seleccionado servicios.</p>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Datos de la Cita:</h3>
        <p><strong>Nombre:</strong> {appointmentData.nombre}</p>
        <p><strong>Fecha:</strong> {appointmentData.fecha}</p>
        <p><strong>Hora:</strong> {appointmentData.hora}</p>
      </div>

      <button
        onClick={handleConfirm}
        className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
        disabled={!selectedServices.length || !appointmentData.nombre || !appointmentData.fecha || !appointmentData.hora}
      >
        Confirmar Cita
      </button>
    </div>
  );
};

export default Resumen;
