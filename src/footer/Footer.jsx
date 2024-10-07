import React from 'react'
import './Footer.css'
import logo from '../components/logo_negro_sinFondo.png'

const Footer = () => {
    return (
      <> 
      <footer>
        <div id="padreFooter">          
          <div>
            <img src={logo} alt="logoMenu" class="logoMenu"></img>
          </div>
          <div class="textoFooter">
            <p>Necesitas ayuda?</p>
            Whatsapp: +573123476859
            <p>@_atsuko_lilith/</p>
          </div>
        </div>
      </footer>

      </>
    );
  };
  
  export default Footer;