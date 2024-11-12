import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*-----Components-----*/
import './App.css';


import Home from './screens/Home/Home';
import Info from './screens/info/Info';
import Login from './screens/login/Login';
import Productos from './screens/Productos/Productos';
import Carrito from './screens/carrito/Carrito';
import Registro from './screens/registro/Registro';
import Historial from './screens/historial/Historial'
import Pagos from './screens/pagos/Pagos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* ruta raíz a /Home */}
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Info" element={<Info />} />
       <Route path="/Login" element={<Login />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Historial" element={<Historial />} />
        <Route path="/Pagos" element={<Pagos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;