import {BrowserRouter, Route, Routes } from 'react-router-dom';


/*-----Components-----*/
import './App.css'

import Home from './screens/Home/Home';

import Info from './screens/info/Info';
import Login from './screens/login/Login';
import Consultas from './screens/consultas/Consultas';
import Carrito from './screens/carrito/Carrito';
import Registro from './screens/registro/Registro'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Redirige la ruta raíz a /Home */}
      <Route path="/Home" element={<Home />} /> {/* Ruta para Home */}
      <Route path="/Info" element={<Info />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/consultas" element={<Consultas />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/registro" element={<Registro />} />
      
    </Routes>
  </BrowserRouter>
);
}

export default App
