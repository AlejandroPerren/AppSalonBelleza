import { useState } from 'react';

function AddServiceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        onClick={handleShow} 
        className="bg-cyan-600 px-10 py-6 m-4 font-bold hover:bg-white hover:text-cyan-600"
      >
        Añadir Servicio
      </button>

      {show && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-5/12">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Modal heading</h5>
              <button 
                onClick={handleClose} 
                className="text-2xl text-gray-600 hover:text-gray-800"
              >
                ×
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-700 mb-2">Nombre del Servicio</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700 mb-2">Valor</label>
              <input
                id="Valor"
                className="w-full p-2 border placeholder:px-4 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder='$'
              ></input>
            </div>
            <div className="flex justify-between">
              <button 
                onClick={handleClose} 
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                Cerrar
              </button>
              <button 
                onClick={handleClose} 
                className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-blue-600 transition"
              >
                Guardas Servicio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddServiceModal;
