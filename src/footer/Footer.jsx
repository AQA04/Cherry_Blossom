import React from 'react'
import './Footer.css'
//import logoFooter from '../components/logo_negro_sinFondo.png'
import logoFooter from '../components/logo_negro.jpg'

const Footer = () => {
    return (
      <> 
        <footer>
          <div id='padreFooter'>
            <img src={logoFooter} class="logoFooter"></img>
          
            <div>b</div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;