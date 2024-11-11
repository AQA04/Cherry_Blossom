import React, { useState, useRef, useEffect } from "react";

// Componentes
import './Menu.css';
import logo from '../components/logo_negro_sinFondo.png';
import iconoAcrilico from '/src/components/iconoAcrilico.png';
import iconoDigital from '/src/components/iconoDigital.png';
import iconoEstuche from '/src/components/iconoEstuche.png';
import iconoLienzo from '/src/components/iconoLienzo.png';
import iconoCarrito from '/src/components/iconoCarrito.png'; 
import iconoPerfil from '/src/components/iconoPerfil.png';
import iconoHistorial from '/src/components/iconoHistorial.png';

import Carrito from '../screens/carrito/Carrito';

const Menu = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [productos, setProductos] = useState([]); // Estado para los productos en el carrito
  const popoverRef = useRef(null); // Referencia para el popover

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const eliminarProducto = (producto) => {
    // Lógica para eliminar el producto del carrito
    setProductos((prevProductos) => prevProductos.filter((p) => p.id !== producto.id));
    console.log(`Eliminar producto: ${producto.nombre}`);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const clickPerfil = () => {
    window.location.href = './login';
  };

  const clickHistorial = () => {
    window.location.href = './Historial';
  };

  const clickLogo = () => {
    window.location.href = './Home';
  };

  return (
    <> 
      <div id="menuPrincipal">
        <img src={logo} onClick={clickLogo} style={{ cursor: "pointer" }} alt="logoMenu" id="logoMenu" />
        

        <div id="itemEicono">
          <img src={iconoAcrilico} className="iconosMenu" alt="Acrilico" />
          <a href="./Productos" className='linkMenu'>Acrílico</a>
        </div>

        <div id="itemEicono">
          <img src={iconoDigital} className="iconosMenu" alt="Digital" />
          <a href="./Productos" className='linkMenu'>Digital</a>
        </div>

        <div id="itemEicono">
          <img src={iconoEstuche} className="iconosMenu" alt="Estuche" />
          <a href="./Productos" className='linkMenu'>Estuche</a>
        </div>

        <div id="itemEicono">
          <img src={iconoLienzo} className="iconosMenu" alt="Lienzo" />
          <a href="./Productos" className='linkMenu'>Lienzo</a>
        </div>

        <div>
          <img src={iconoHistorial} onClick={clickHistorial} style={{ cursor: "pointer" }} className="iconosGrandes" alt="Perfil" />
        </div>

        <div>
          <img src={iconoPerfil} onClick={clickPerfil} style={{ cursor: "pointer" }} className="iconosGrandes" alt="Perfil" />
        </div>

        <div>
          <img 
            src={iconoCarrito} 
            onClick={togglePopover} 
            style={{ cursor: "pointer", width: "30px", height: "30px" }} // Ajusta el tamaño según sea necesario
            alt="Carrito" 
          />
          {isPopoverVisible && (
            <div className="popover" ref={popoverRef}>
              <Carrito productos={productos} eliminarProducto={eliminarProducto} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;