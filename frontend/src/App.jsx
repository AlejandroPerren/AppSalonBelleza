// App.js
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    
      <div>
        <ToastContainer position="top-right" />
        <RouterProvider router={router} />
      </div>
    );
  
}

export default App;
