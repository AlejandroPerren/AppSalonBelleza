import React from 'react'
import Date from '../components/Date'
import Resumen from '../components/Resumen'
import Header from '../components/subcomponents/Header'

const Home = () => {
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className='flex item-center justify-center'>
                <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
            </div>

            <div>
                <Header></Header>
                <main className='flex justify-center'>
                    <div className='bg-blue-600 flex mx-4 justify-around text-center w-full my-16'>
                        <button className='uppercase w-full hover:bg-white hover:text-blue-600'>Servicios</button>
                        <button className='uppercase w-full hover:bg-white hover:text-blue-600'>Informacion Cita</button>
                        <button className='uppercase w-full hover:bg-white hover:text-blue-600'>Resumen</button>
                    </div>

                    <div>
                     
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
