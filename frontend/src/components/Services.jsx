import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { IoTrashBin } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Modal from './subcomponents/Modal'; 
import { useAuth } from '../context/AuthContext';
const Services = () => {
  const [services, setServices] = useState([]); 
  const {isAdmin} = useAuth()
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const { authToken } = useAuth();
  const handleClose = () => setShow(false);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!data || !data.id) {
        toast.error("El ID del servicio es inválido");
        return;
      }
  
      const response = await fetch(`${SummaryApi.updateServices.url}/${data.id}`, {
        method: SummaryApi.updateServices.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },  
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
  
      if (result.success) {
        toast.success('Servicio actualizado correctamente');
        fetchServices();
        handleClose();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Ocurrió un error al actualizar el servicio');
    }
  };

  const fetchServices = async () => {
    try {
      const fetchData = await fetch(SummaryApi.Services.url, {
        method: SummaryApi.Services.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },  
      });
      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setServices(dataResponse.data);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error('Ocurrió un error al obtener los servicios');
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SummaryApi.deleteServices.url}/${id}`, {
        method: SummaryApi.deleteServices.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },  
      });

      if (response.ok) {
        toast.success('Servicio eliminado correctamente');
        fetchServices();
      } else {
        toast.error('No se pudo eliminar el servicio');
      }
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  };

  const handleEdit = (ser) => {
    setData(ser);  
    setShow(true); 
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className='flex flex-col'>
      <div>
        <h2 className='mb-6 font-extrabold text-4xl'>Servicios</h2>
        <p>Elige tus servicios a continuación</p>
      </div>

      <div className='grid grid-cols-2'>
        {services.map((ser) => (
          <div
            className="bg-white py-7 rounded-lg m-4 transition hover:-translate-y-1 hover:scale-105 duration-300"
            key={ser.id}
          >
            <h3 className='text-black mb-2 text-xl'>{ser.nombre}</h3>
            <p className='text-cyan-600 font-bold text-4xl'>${ser.precio}</p>
            {isAdmin && (
              <div className="flex justify-evenly mt-4">
                <button onClick={(e) => handleDelete(e, ser.id)}>
                  <IoTrashBin className='text-cyan-600 text-3xl cursor-pointer transition hover:-translate-y-2 hover:scale-125' />
                </button>
                <button onClick={() => handleEdit(ser)}>
                  <FaPencilAlt className='text-cyan-600 text-3xl cursor-pointer transition hover:-translate-y-2 hover:scale-125' />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {show && (
        <Modal
          show={show}
          handleClose={handleClose}
          data={data}  
          setData={setData}
          handleSubmit={handleSubmit} 
          handleOnChange={handleOnChange}  
          title="Editar Servicio"
        />
      )}
    </section>
  );
};

export default Services;
