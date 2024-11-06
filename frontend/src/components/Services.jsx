import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify' 
import { GeneralContext } from '../context/generalContext'
import { IoTrashBin } from "react-icons/io5";
const Services = () => {
  const [service, setServices] = useState([])
  const {isAdmin } = useContext(GeneralContext);
 
  const fetchServices = async () => {
    try {
        const fetchData = await fetch(SummaryApi.Services.url, {
            method: SummaryApi.Services.method
        });
        const dataResponse = await fetchData.json();
        console.log(dataResponse);
        if (dataResponse.success) {
            setServices(dataResponse.data); 
        } else {
            toast.error(dataResponse.message);
        }
    } catch (error) {
        toast.error('Ocurrió un Error');
    }
};
  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <section className='flex flex-col'>
      <div>
      <h2 className='mb-6 font-extrabold text-4xl'>Servicios</h2>
      <p >Elige tus servicios a continuación</p>
      </div>

      <div className='grid grid-cols-2 '>
        { 
          
          service.map((ser) => (
          
            <div className="bg-white py-7 rounded-lg m-4 transition hover:-translate-y-1 hover:scale-105 duration-300" key={ser.id}> 
              <h3 className='text-black mb-2 text-xl'>{ser.nombre}</h3>
              <p className='text-cyan-600 font-bold text-4xl'>${ser.precio}</p>
              {isAdmin && (
                <div className="flex justify-center mt-4 ">
                  <IoTrashBin className='text-cyan-600 text-3xl cursor-pointer transition hover:-translate-y-2 hover:scale-125' />
                </div>
              )}
            </div>
          ))
          
        }

      </div>


    </section>
  )
}

export default Services
