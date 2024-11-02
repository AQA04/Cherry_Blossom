import {useState} from "react";

//componentes
import './Menu.css'
import logo from '../components/logo_negro_sinFondo.png'
import iconoAcrilico from '/src/components/iconoAcrilico.png'
import iconoDigital from '/src/components/iconoDigital.png'
import iconoEstuche from '/src/components/iconoEstuche.png'
import iconoLienzo from '/src/components/iconoLienzo.png'
import iconoCarrito from '/src/components/iconoCarrito.png'
import iconoPerfil from '/src/components/iconoPerfil.png'

import Carrito from '../screens/carrito/Carrito';


const Menu = () => {
  const [productos, setProductos] = useState([]); 
  const [isOpen, setIsOpen] = useState(false);

  const clickLogo = () => {
    window.location.href = './';
  };

  const clickPerfil = () => {
    window.location.href = './login';
  };
  const clickCarrito = () => {
    window.location.href = './carrito';
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (producto) => {
    const nuevosProductos = productos.filter((p) => p.id !== producto.id);
    setProductos(nuevosProductos);
  };

  return (
    <> 
    <div id="menuPrincipal">
        
        <img src={logo} onClick={clickLogo} style={{cursor:"pointer"}} alt="logoMenu" id="logoMenu"></img>
        
        <div id="itemEicono">
        <img src={iconoAcrilico} className="iconosMenu"></img>
        <a href="./consultas" className='linkMenu'>Acrilico</a>
        </div>

        <div id="itemEicono">
        <img src={iconoDigital} className="iconosMenu"></img>
        <a href="./consultas" className='linkMenu'>Digital</a>
        </div>

        <div id="itemEicono">
        <img src={iconoEstuche} className="iconosMenu"></img>
        <a href="./consultas" className='linkMenu'>Estuche</a>
        </div>

        <div id="itemEicono">
        <img src={iconoLienzo} className="iconosMenu"></img>
        <a href="./consultas" className='linkMenu'>Lienzo</a>
        </div>

        <div>
        <img src={iconoPerfil} onClick={clickPerfil} style={{cursor:"pointer"}} className="iconosGrandes"></img>
        </div>

        <div>
          <div 
            className="icono-carrito" 
            onMouseEnter={togglePopover} 
            onMouseLeave={togglePopover}
            style={{ position: 'relative' }} 
          >
            <img 
              src={iconoCarrito} 
              style={{ cursor: "pointer" }} 
              className="iconosGrandes" 
              alt="Carrito" 
            />
            {productos.length > 0 && <span className="cantidad">{productos.length}</span>}
            {isOpen && (
              <Carrito productos={productos} eliminarProducto={eliminarProducto} />
            )}
          </div>
        </div>
    </div>
    </>
  );
};

export default Menu;