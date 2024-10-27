import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
          <form>
            <div className='grid grid-cols-customAuth my-16 gap-6'>
              <label htmlFor="email">Email</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="text" placeholder='Tu Email' />

              <label htmlFor="Contraseña">Contraseña</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="password" placeholder='Tu Contraseña'/>
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