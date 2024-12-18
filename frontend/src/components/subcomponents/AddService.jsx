import { useState } from 'react';
import SummaryApi from '../../common';
import Modal from '../subcomponents/Modal';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

function AddService() {
  const [show, setShow] = useState(false);
  const { authToken } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    nombre: "",
    precio: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.createServices.url, {
        method: SummaryApi.createServices.method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },  
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        handleClose();
        window.location.reload();
      } else {
        toast.error("Error al Crear el Producto, intente de nuevo por favor");
        console.log(result.message);
      }
    } catch (error) {
      toast.error("Hubo un problema con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <button 
        onClick={handleShow} 
        className="bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600"
      >
        Añadir Servicio
      </button>

      <Modal
        show={show}
        handleClose={handleClose}
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        title="Añadir Nuevo Servicio"
      />
    </>
  );
}

export default AddService;
