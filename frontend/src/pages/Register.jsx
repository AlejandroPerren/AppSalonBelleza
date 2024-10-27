import React from 'react'

const Register = () => {
  return (
   
    <div className='grid grid-cols-2 h-screen'>
    <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
    </div>

    <div>
      <h1>Crear Cuenta</h1>
      <p>Llena el siguiente formulario para crear una cuenta</p>
      <form>
        <div className=''>
        <label htmlFor="Nombre">Nombre</label>
              <input type="text"/>

              <label htmlFor="Apellido">Apellido</label>
              <input type="text"/>

              <label htmlFor="email">E-mail</label>
              <input type="text"/>

              <label htmlFor="cel">Telefono</label>
              <input type="text"  />

              <label htmlFor="DNI">DNI</label>
              <input type="text"/>

              <label htmlFor="CUIL">CUIL</label>
              <input type="text"/>

              <label htmlFor="Contraseña">Contraseña</label>
              <input type="password"/>
        </div>
        <button type='submit'>
            Crear Cuenta
          </button>
        <div>
          <Link to="forgotPass">¿Olvidaste tu Password?</Link>
          <Link to="login">Ya tienes una cuenta? Inicia Sesion</Link>
        </div>
      </form>
    </div>
</div>
  )
}

export default Register
