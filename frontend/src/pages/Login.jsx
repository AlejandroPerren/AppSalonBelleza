import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
    <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
    </div>

    <div >
      <div className='text-center'>
      <h1 className='font-extrabold mt-16 '>Login</h1>
      <p className='mt-12'>Inicia sesion con tus datos</p>
      </div>
      <div>
      <form>
        <div className='grid grid-cols-2 my-12'>
              <label htmlFor="email">E-mail</label>
              <input className='' type="text"/>
   
              <label htmlFor="Contraseña">Contraseña</label>
              <input className='' type="password"/>
        </div>
        <button type='submit'>
            Ingresa
          </button>
        
      </form>
      <div className='justify-between'>
          <Link to="forgotPass">¿Olvidaste tu Password?</Link>
          <Link to="login">Aun no tienes una cuenta? Crea Una</Link>
        </div>
      </div>
    </div>
</div>
  )
}

export default Login