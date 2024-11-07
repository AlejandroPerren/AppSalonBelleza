import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { GeneralProvider } from './context/generalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </BrowserRouter>
  </StrictMode>
);
