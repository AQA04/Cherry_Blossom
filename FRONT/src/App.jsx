//App.jsx, la madre
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*-----Components-----*/
import './App.css';

//Importamos todos los componentes y screens del codigo
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
        <Route path="/" element={<Home />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/Home" element={<Home />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/Info" element={<Info />} /> {/*Creamos la ruta e instanciamos el componente*/}
       <Route path="/Login" element={<Login />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/Productos" element={<Productos />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/carrito" element={<Carrito />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/registro" element={<Registro />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/Historial" element={<Historial />} /> {/*Creamos la ruta e instanciamos el componente*/}
        <Route path="/Pagos" element={<Pagos />} />{/*Creamos la ruta e instanciamos el componente*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;