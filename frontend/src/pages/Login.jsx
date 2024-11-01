import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
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
    e.preventDefault();
  
    try {
      const dataResponse = await fetch(SummaryApi.Login.url, {
        method: SummaryApi.Login.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const dataApi = await dataResponse.json();
  
      if (dataResponse.ok && dataApi.success) {
        toast.success(dataApi.message);
        navigate("/");
      } else {
        toast.error(dataApi.message || "Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Error al conectarse al servidor.");
    }
  };
  

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover' />
      </div>

      <div className='mx-6' >
        <div className='text-center'>
          <h1 className='font-extrabold mt-36 text-5xl'>Login</h1>
          <p className='mt-24'>Inicia sesion con tus datos</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-customAuth my-16 gap-6'>
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
            <div className="relative">
              <input
                className="rounded-lg p-4 focus:outline-none text-black w-full pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Tu Contraseña"
                value={data.password}
                onChange={handleOnChange}
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash className='text-black size-8'/> : <FaEye className='text-black size-8'/>}
              </div>
            </div>
            </div>
            <button type='submit' className='bg-azul mt-6 py-4 px-10 font-extrabold  hover:bg-blue-600'>
              Iniciar Sesión
            </button>

          </form>
          <div className='flex justify-between my-28'>
            <Link to="forgotPass">¿Olvidaste tu Password?</Link>
            <Link to="/register">Aun no tienes una cuenta? Crea Una</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login