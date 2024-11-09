import React, { useContext } from 'react';
import Header from '../components/subcomponents/Header';
import NavBar from '../components/subcomponents/NavBar';
import Services from '../components/Services';
import { GeneralContext } from '../context/generalContext'; 
import DateInfo from '../components/DateInfo';
import Boton from '../components/subcomponents/Boton';

import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom'; 
import Resumen from '../components/Resumen';
import VerCitas from '../components/Dates';

const Home = () => {
  const { activeSection } = useContext(GeneralContext);
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to='/login' />;
  }

  const renderComponent = () => {
    switch (activeSection) {
      case 'citas':
        return <VerCitas/>;
      case 'citaInfo':
        return <DateInfo />;
      case 'servicios':
        return <Services />;
      case 'resumen':
        return <Resumen></Resumen>;
      default:
        return null;
    }
  };

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='flex items-center justify-center'>
        <img src="../../public/1.jpg" className='w-full h-full object-cover' alt="Background" />
      </div>
      <div>
        <Header />
        <main className='flex justify-center flex-col text-center'>
          <NavBar />
          <div>
            {renderComponent()}
          </div>
          <div className='flex justify-between'>
            <Boton />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
