import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GeneralProvider } from './context/generalContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralProvider>
    <App />
    </GeneralProvider>
  </StrictMode>,
)
