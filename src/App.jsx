import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

/*-----Components-----*/
import './App.css'
import Menu from './menu/Menu'
import Carrusel from './screens/Home/carrusel/Carrusel'
import AboutUs from './screens/Home/aboutUs/AboutUs';
import Footer from './footer/Footer';
import Productos from './screens/Home/products/Productos';


import Info from './screens/info/Info';

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


    {/* Rutas para iniciar las otras paginas*/}

        
    <div>
    <BrowserRouter>
      <Link to="/Info">Info</Link>
      
      <switch>
        <Routes>
          <Route path="/Info" element={<Info />} />
        </Routes>
        </switch>
      </BrowserRouter>
    </div>

    </>
  );
}

export default App
