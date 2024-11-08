import React, { useContext } from 'react';
import Header from '../components/subcomponents/Header';
import NavBar from '../components/subcomponents/NavBar';
import Services from '../components/Services';
import { GeneralContext } from '../context/generalContext'; 
import DateInfo from '../components/DateInfo';
import Boton from '../components/subcomponents/Boton';
import AddServiceModal from '../components/subcomponents/AddService';

const Home = () => {
    const { activeSection } = useContext(GeneralContext);

    const renderComponent = () => {
        switch (activeSection) {
            case 'citas':
                return <h1>Hola</h1>;
                case 'citaInfo':
                return <DateInfo/>;
            case 'servicios':
                return <Services />;
            case 'resumen':
                return <h1>Hola</h1>;
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
                    <div className='flex justify-between '>
                    <Boton/>
                    </div>
                    
                </main>
            </div>
        </div>
    );
};

export default Home;
