import React from "react";
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";

//componentes
import './Menu.css'
import logo from '../components/logo_negro_sinFondo.png'
import iconoAcrilico from '/src/components/iconoAcrilico.png'
import iconoDigital from '/src/components/iconoDigital.png'
import iconoEstuche from '/src/components/iconoEstuche.png'
import iconoLienzo from '/src/components/iconoLienzo.png'
import iconoCarrito from '/src/components/iconoCarrito.png'
import iconoPerfil from '/src/components/iconoPerfil.png'
import Info from "../screens/info/Info";

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