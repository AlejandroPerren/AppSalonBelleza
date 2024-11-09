import React from 'react';

const Modal = ({ show, handleClose, data, handleOnChange, handleSubmit, title }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-5/12">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-semibold">{title}</h5>
          <button 
            onClick={handleClose} 
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            ×
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre del Servicio</label>
          <input
            type="text"
            name="nombre"
            value={data.nombre}
            onChange={handleOnChange}
            id="nombre"
            className="w-full p-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block text-gray-700 mb-2">Valor</label>
          <input
            type="text"
            name="precio"
            value={data.precio}
            onChange={handleOnChange}
            id="precio"
            className="w-full p-2 border text-black placeholder:px-4 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="$"
          />
        </div>
        <div className="flex justify-between">
          <button 
            onClick={handleClose} 
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Cerrar
          </button>
          <button 
            type="submit"
            className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-blue-600 transition"
          >
            Guardar Servicio
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
