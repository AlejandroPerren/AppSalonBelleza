import React from 'react'
import Date from '../components/Date'
import Resumen from '../components/Resumen'

const Home = () => {
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div flex item-center justify-center>
                <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
            </div>

            <div>
                <header className='items-end flex justify-between mx-8 my-2'>
                    <h2 className=''>
                        Hola:Ale
                    </h2>
                    <h2 className='font-extrabold cursor-pointer text-5*1'>
                        Cerrar Sesion
                    </h2>
                </header>
                <main className='flex justify-center'>
                    <div className='bg-blue-600 flex mx-4 justify-around text-center'>
                        <button className='uppercase h-full hover:bg-white hover:text-blue-600'>Servicios</button>
                        <button className='uppercase hover:bg-white hover:text-blue-600'>Informacion Cita</button>
                        <button className='uppercase hover:bg-white hover:text-blue-600'>Resumen</button>
                    </div>

                    <div>
                     
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
