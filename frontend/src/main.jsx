import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GeneralProvider } from './context/generalContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <GeneralProvider>
    <App />
    </GeneralProvider>
    </AuthProvider>
  </StrictMode>,
)
