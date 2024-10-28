import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
   
    <div className='grid grid-cols-2 h-screen'>
    <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
    </div>

    <div className='mx-6'>
    <div className='text-center'>
      <h1 className='font-extrabold mt-36 text-5xl'>Crear Cuenta</h1>
      <p className='mt-24'>Llena el siguiente formulario para crear una cuenta</p>
      </div>
      <form>
      <div className='grid grid-cols-customAuth my-16 gap-6'>
        
              <label htmlFor="Contraseña">Nombre</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="text" placeholder='Tu Nombre'/>
              
              <label htmlFor="Contraseña">Apellido</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="text" placeholder='Tu Apellido'/>
              
              <label htmlFor="Contraseña">Telefono</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="text" placeholder='Tu Telefono'/>
              
              <label htmlFor="email">Email</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="text" placeholder='Tu Email' />

              <label htmlFor="Contraseña">Contraseña</label>
              <input className='rounded-lg py-2 placeholder:pl-4' type="password" placeholder='Tu Contraseña'/>

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
