import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from 'react-icons/fa'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.Register.url, {
      method: SummaryApi.Register.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      toast.success(dataApi.message)
      navigate("/login")
    }
    if (dataApi.error) {
      toast.error(dataApi.message)
    }
  }

  return (

    <div className='grid grid-cols-2 h-screen'>
      <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover' />
      </div>

      <div className='mx-6'>
        <div className='text-center'>
          <h1 className='font-extrabold mt-36 text-5xl'>Crear Cuenta</h1>
          <p className='mt-24'>Llena el siguiente formulario para crear una cuenta</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-customAuth my-16 gap-6'>

            <label className="self-center" htmlFor="Contraseña">Nombre</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='nombre'
              placeholder='Tu Nombre'
              value={data.nombre}
              required
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="Contraseña">Apellido</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='apellido'
              placeholder='Tu Apellido'
              value={data.apellido}
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="Contraseña">Telefono</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='telefono'
              placeholder='Tu Telefono'
              value={data.telefono}
              onChange={handleOnChange}
            />

            <label className="self-center" htmlFor="email">Email</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='email'
              placeholder='Tu Email'
              value={data.email}
              onChange={handleOnChange}
              required
            />

            <label className="self-center" htmlFor="Contraseña">Contraseña</label>
            <input className='rounded-lg p-4 focus:outline-none text-black'
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder='Tu Contraseña'
              value={data.password}
              onChange={handleOnChange}
              required
            />
            <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
              <span>
                {
                  showPassword ? (
                    <FaEyeSlash />
                  )
                    :
                    (
                      <FaEye />
                    )
                }
              </span>
            </div>

          </div>


          <button type='submit' className='bg-azul mt-6 py-4 px-10 font-extrabold  hover:bg-blue-600'>
            Crear Cuenta
          </button>

        </form>
        <div className='flex justify-between my-28'>
          <Link to="/forgotPass">¿Olvidaste tu Password?</Link>
          <Link to="/login">Ya tienes una cuenta? Inicia Sesion</Link>
        </div>

      </div>
    </div>
  )
}

export default Register
