import React, { useState } from 'react'
import SummaryApi from '../common'
import { useNavigate } from 'react-router-dom'

const DateInfo = () => {
  const [data, setData] = useState({
    nombre: "",
    fecha: "",
    hora: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
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
            <input className='rounded-lg p-4 focus:outline-none  text-black'
              type="text"
              name='nombre'
              placeholder='Tu Nombre'
              value={data.nombre}
              required
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="apellido">Fecha</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="date"
              name='fecha'
              value={data.fecha}
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="hora">Hora</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="time"
              name='Hora'
              value={data.hora}
              onChange={handleOnChange}
            />
        </div>
        </form> 
      </div>
    </section>
  )
}

export default DateInfo
