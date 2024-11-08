import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        window.location.reload(); 
      };
    return (
        <header className='items-end flex justify-between mx-8 my-2'>
            <h2 className=''>
                Hola:Ale
            </h2>

            <Link to="/login" onClick={handleLogout} className='font-extrabold cursor-pointer text-5*1'>
                Cerrar Sesion
            </Link>
        </header>
    )
}

export default Header