// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SummaryApi from '../common';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GeneralContext } from '../context/generalContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const { login } = useContext(GeneralContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.Login.url, {
        method: SummaryApi.Login.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        login(result.token, result.data.rol === 'admin');
      } else {
        toast.error("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Hubo un problema con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='flex item-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover' />
      </div>
      <div className='mx-6'>
        <div className='text-center'>
          <h1 className='font-extrabold mt-36 text-5xl'>Login</h1>
          <p className='mt-24'>Inicia sesión con tus datos</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-customAuth my-16 gap-6'>
            <label className="self-center" htmlFor="email">Email</label>
            <input
              className='rounded-lg p-4 focus:outline-none text-black'
              type="text"
              name='email'
              placeholder='Tu Email'
              value={data.email}
              onChange={handleOnChange}
              required
            />
            <label className="self-center" htmlFor="password">Contraseña</label>
            <div className="relative">
              <input
                className="rounded-lg p-4 focus:outline-none text-black w-full pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Tu Contraseña"
                value={data.password}
                onChange={handleOnChange}
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash className='text-black size-8' /> : <FaEye className='text-black size-8' />}
              </div>
            </div>
          </div>
          <button type='submit' className='bg-azul mt-6 py-4 px-10 font-extrabold hover:bg-blue-600'>
            Iniciar Sesión
          </button>
        </form>
        <div className='flex justify-between my-28'>
          <Link to="/forgotPass">¿Olvidaste tu Password?</Link>
          <Link to="/register">¿Aún no tienes una cuenta? Crea Una</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
