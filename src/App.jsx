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
import Carrito from './screens/carrito/Carrito';

function App() {


  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Carrusel />} />
          </Routes>
        </BrowserRouter>
      </div>



      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </div>



      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Galeria />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>

    {/* Rutas para iniciar las otras paginas*/}

        

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
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
