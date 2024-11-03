import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify' 

const Services = () => {
  const [service, setServices] = useState([])

  const fetchServices = async () => {
    try {
      const fetchData = await fetch(SummaryApi.Services.url, {
        method: SummaryApi.Services.method
      })
      const dataResponse = await fetchData.json()
      console.log(dataResponse)
      if (dataResponse.success) {
        setServices(dataResponse.data)
      } else if (dataResponse.error) {
        toast.error(dataResponse.message)
      }
    } catch (error) {
      toast.error('Ocurrio un Error')
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div>
      <h2>Servicios</h2>
      <p>Elige tus servicios a continuación</p>

      <div>
        {
          service.map((ser) => (
            <div key={ser.id}> 
              <h3>{ser.nombre}</h3>
              <p>{ser.precio}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services
