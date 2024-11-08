import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); //
    navigate('/login'); 
  };

  return (
    <header className='items-end flex justify-between mx-8 my-2'>
      <h2 className=''>
        Hola: {user ? user.name : 'Invitado'}
      </h2>

      <Link 
        to="/login" 
        onClick={handleLogout} 
        className='font-extrabold cursor-pointer text-5xl'
      >
        Cerrar Sesión
      </Link>
    </header>
  );
};

export default Header;
