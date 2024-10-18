import React from "react";

//componentes
import './Menu.css'
import logo from '../components/logo_negro_sinFondo.png'
import iconoAcrilico from '/src/components/iconoAcrilico.png'
import iconoDigital from '/src/components/iconoDigital.png'
import iconoEstuche from '/src/components/iconoEstuche.png'
import iconoLienzo from '/src/components/iconoLienzo.png'
import iconoCarrito from '/src/components/iconoCarrito.png'
import iconoPerfil from '/src/components/iconoPerfil.png'

const Menu = () => {

  const clickLogo = () => {
    window.location.href = './';
  };

  const clickPerfil = () => {
    window.location.href = './login';
  };

  const clickCarrito = () => {
    window.location.href = './Carrito';
  };



  return (
    <> 
    <div id="menuPrincipal">
        
        <img src={logo} onClick={clickLogo} style={{cursor:"pointer"}} alt="logoMenu" id="logoMenu"></img>
        
        <div id="itemEicono">
        <img src={iconoAcrilico} class="iconosMenu"></img>
        <a href="" class='linkMenu'>Acrilico</a>
        </div>

        <div id="itemEicono">
        <img src={iconoDigital} class="iconosMenu"></img>
        <a href="" class='linkMenu'>Digital</a>
        </div>

        <div id="itemEicono">
        <img src={iconoEstuche} class="iconosMenu"></img>
        <a href="" class='linkMenu'>Estuche</a>
        </div>

        <div id="itemEicono">
        <img src={iconoLienzo} class="iconosMenu"></img>
        <a href="" class='linkMenu'>Lienzo</a>
        </div>

        <div>
        <img src={iconoCarrito}onClick={clickCarrito} style={{cursor:"pointer"}} class="iconosGrandes"></img>
        </div>

        <div>
        <img src={iconoPerfil} onClick={clickPerfil} style={{cursor:"pointer"}} class="iconosGrandes"></img>
        </div>

    </div>
    </>
  );
};

export default Menu;