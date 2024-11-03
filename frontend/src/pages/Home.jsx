import React from 'react'
import Date from '../components/Date'
import Resumen from '../components/Resumen'
import Header from '../components/subcomponents/Header'
import NavBar from '../components/subcomponents/NavBar'

const Home = () => {
    
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className='flex item-center justify-center'>
                <img src="../../public/1.jpg" className='w-full h-full object-cover'/>
            </div>

            <div>
                <Header></Header>
                <main className='flex justify-center'>
                  <NavBar/>

                    <div>
                     
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
