import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*-----Components-----*/
import './App.css'
import Menu from './menu/Menu'
import Carrusel from './screens/Home/carrusel/Carrusel'
import AboutUs from './screens/Home/aboutUs/AboutUs';
import Footer from './footer/Footer';
import Productos from './screens/Home/products/Productos';

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
    

      <div id='divisor'></div>
      <div id='divisor'></div>


      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </div>


      <div id='divisor'></div>
      <div id='divisor'></div>

      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div id='divisor'></div>
      <div id='divisor'></div>

      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App
