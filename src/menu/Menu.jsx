import React from "react";
import './Menu.css'
import logo from '../components/logo_negro_sinFondo.png'
import iconoAcrilico from '../components/iconoAcrilico.png'
import iconoDigital from '../components/iconoDigital.png'
import iconoEstuche from '../components/iconoEstuche.png'
import iconoLienzo from '../components/iconoLienzo.png'
import iconoCarrito from '../components/iconoCarrito.png'
import iconoPerfil from '../components/iconoPerfil.png'


const Menu = () => {
  return (
    <> 
    <div id="menuPrincipal">
        
        <img src={logo} alt="logoMenu" id="logoMenu"></img>

        <div id="itemEicono">
        <img src={iconoAcrilico} class="iconosMenu"></img>
        <a href="./" class='linkMenu'>Acrilico</a>
        </div>
        
                
        <div id="itemEicono">
        <img src={iconoDigital} class="iconosMenu"></img>
        <a href="./" class='linkMenu'>Digital</a>
        </div>

        <div id="itemEicono">
        <img src={iconoEstuche} class="iconosMenu"></img>
        <a href="./" class='linkMenu'>Estuche</a>
        </div>

        <div id="itemEicono">
        <img src={iconoLienzo} class="iconosMenu"></img>
        <a href="./" class='linkMenu'>Lienzo</a>
        </div>

        <div>
        <img src={iconoCarrito} class="iconosGrandes"></img>
        </div>

        <div>
        <img src={iconoPerfil} class="iconosGrandes"></img>
        </div>

    </div>
    </>
  );
};

export default Menu;