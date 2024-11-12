import { StrictMode } from 'react' //detecto problemas potenciales
import { createRoot } from 'react-dom/client' //reenderiza en el DOM
import App from './App.jsx'
import './index.css'

//renderiza la aplicacion 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
