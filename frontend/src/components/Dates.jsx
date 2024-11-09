import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const VerCitas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch(SummaryApi.getDates.url, {
          method : SummaryApi.getDates.method,
          headers: {
            'Authorization': `Bearer ${authToken}`
          }, 
        });
        
        const data = await response.json();
        if (response.ok) {
          setCitas(data);
        } else {
          toast.error(`Error al cargar citas: ${data.message}`);
        }
      } catch (error) {
        toast.error("Ocurrió un error al cargar las citas", error);
        console.log(error)
      }
    };

    fetchCitas();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-cyan-600">
      <h2 className="text-2xl font-bold mb-4">Citas Programadas</h2>
      {citas.length > 0 ? (
        citas.map((cita) => (
          <div key={cita.id} className="mb-4 border p-4 rounded">
            <p><strong>Nombre:</strong> {cita.Usuario.nombre} {cita.Usuario.apellido}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <h3 className="text-lg font-semibold mt-2">Servicios:</h3>
            <ul className="list-disc list-inside">
              {cita.Servicios.map((servicio) => (
                <li key={servicio.id}>{servicio.nombre} - ${servicio.precio}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No hay citas programadas.</p>
      )}
    </div>
  );
};

export default VerCitas;
