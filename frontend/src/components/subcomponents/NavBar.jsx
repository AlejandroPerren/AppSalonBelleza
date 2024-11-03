import React from 'react';

const NavBar = () => {
    const isAdmin = true;

    return (
        <div>
            {isAdmin ? (
                 <div className=' flex mx-4 justify-between my-16'>
                 <button className='bg-blue-600 uppercase w-full p-4 hover:bg-white hover:text-blue-600'>Citas</button>
                 <button className='bg-blue-600 uppercase w-full p-4 hover:bg-white hover:text-blue-600'>Nuestros Servicios</button>
             </div>
            ) : (
              
                 <div className='bg-blue-600 flex mx-4 justify-around text-center w-full my-16'>
                 <button className='uppercase w-full p-4 hover:bg-white hover:text-blue-600'>Servicios</button>
                 <button className='uppercase w-full p-4 hover:bg-white hover:text-blue-600'>Informacion Cita</button>
                 <button className='uppercase w-full p-4 hover:bg-white hover:text-blue-600'>Resumen</button>
             </div>
            )}
        </div>
    );
}

export default NavBar;
