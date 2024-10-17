import React from 'react'
import './Footer.css'
//import logoFooter from '../components/logo_negro_sinFondo.png'
import logoFooter from '../components/logo_negro_sinFondo.png'

const Footer = () => {
    return (
      <> 
        <footer>
          <div id='padreFooter'>

            <div class='logoFooter'>
              <img src={logoFooter} class="logoFooter"></img>
              <p>@Cherry Blossom Store</p>
            </div>

            <div class='textoFooter'>
              <a class="tituloFooter">Redes</a>
              <p>@atsu_artist</p> 
              <p>+57 312 3476859</p> 
              <p>Envigado - Colombia</p> 
              
            </div>

            <div class='textoFooter'>
              <p class="tituloFooter">Productos</p>
              <p></p>
              <a href="./info" class="linkFooter">Acrilicos</a> 
              <p></p>
              <a href="./info" class="linkFooter">Digital</a>
              <p></p>
              <a href="./info" class="linkFooter">Estuches</a>
              <p></p>
              <a href="./info" class="linkFooter">Lienzos</a> 
            </div>



            <div class='textoFooter'>
            <a class="tituloFooter">Terminos y condiciones</a>
              <p>Leer TyC</p> 
              <p>Preguntas Frecuentes</p> 
              <p>Español - Colombia</p> 
            </div>
            

             


        </div>
        </footer>
      </>
    );
  };
  
  export default Footer;