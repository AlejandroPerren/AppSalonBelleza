import React, { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/generalContext';
import { format, addMonths } from 'date-fns';

const DateInfo = () => {
  const { appointmentData, updateAppointmentData } = useContext(GeneralContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    updateAppointmentData({ [name]: value });
  };

  useEffect(() => {
  
    const today = new Date();
    const maxDate = addMonths(today, 3);
    setMinDate(format(today, 'yyyy-MM-dd'));
    setMaxDate(format(maxDate, 'yyyy-MM-dd'));
  }, []);

  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  return (
    <section>
      <div className='pb-12 flex flex-col'>
        <h2 className='mb-6 font-extrabold text-4xl'>Tus Datos y Cita</h2>
        <p>Coloca tus datos y fecha de tu cita</p>
      </div>
      <div>
        <form>
          <div className='grid grid-cols-customAuth gap-4'>
            <label className="self-center" htmlFor="nombre">Nombre</label>
            <input
              className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='nombre'
              placeholder='Tu Nombre'
              value={appointmentData.nombre}
              required
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="fecha">Fecha</label>
            <input
              className='rounded-lg p-4 focus:outline-none text-black'
              type="date"
              name='fecha'
              value={appointmentData.fecha}
              min={minDate} 
              max={maxDate}
              required
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="hora">Hora</label>
            <input
              className='rounded-lg p-4 focus:outline-none text-black'
              type="time"
              name='hora'
              value={appointmentData.hora}
              min="09:00" 
              max="18:00" 
              required
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default DateInfo;
