import {BrowserRouter, Route, Routes } from 'react-router-dom';


/*-----Components-----*/
import './App.css'
import Menu from './menu/Menu'
import Carrusel from './screens/Home/carrusel/Carrusel'
import AboutUs from './screens/Home/aboutUs/AboutUs';
import Footer from './footer/Footer';
import Productos from './screens/Home/productos/Productos';
import Galeria from './screens/Home/galeria/galeria'

import Info from './screens/info/Info';
import Login from './screens/login/Login';
import Consultas from './screens/consultas/Consultas';
import Carrito from './screens/carrito/Carrito';
import Registro from './screens/registro/Registro'
import Home from './screens/Home'
function App() {


  return (
    <>
    {/* Rutas para iniciar las otras paginas*/}

        
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>

    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/consultas" element={<Consultas />} />
          </Routes>
        </BrowserRouter>
      </div>


      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/registro" element={<Registro />} />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  );
}

export default App
