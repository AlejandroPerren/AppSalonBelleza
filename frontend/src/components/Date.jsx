import React from 'react'
import SummaryApi from '../common'

const Date = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    <div>
       <h2>Tus Datos y Cita</h2>
        <p>Coloca tus datos y fecha de tu cita</p>

        <div>
       <form>
       <label className="self-center" htmlFor="nombre">Nombre</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
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

        </form> 
      </div>
    </div>
  )
}

export default Date
