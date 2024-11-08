import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import PrivateRoute from '../helpers/PrivateRoutes';
const router = createBrowserRouter([
  
  {
    path: '/',
    element: 
    <PrivateRoute>
    <Home />
    </PrivateRoute>
    ,
  },
  {
    path: '/login',
    element: 
    <Login />
    ,
  },
  {
    path: '/register',
    element: <Register/>,
  },
]);

export default router;
