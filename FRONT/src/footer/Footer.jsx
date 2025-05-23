//Footer.jsx
import React from 'react'
//Importamos estilos del css
import './Footer.css'
import logoFooter from '../components/logo_negro_sinFondo.png'

//Creamos la funcion. Esta es una funcion estatica, lo unico dinamico son los hipervinculos en el logo y el texto
const Footer = () => {
    return (
      <> 
        <footer>
          <div id='padreFooter'>

            <div className='logoFooter'>{/*logo, nombre de la tienda */}
              <img className="logoFooter" src={logoFooter} alt="logoFooter" />
              <p>@Cherry Blossom Store</p>
            </div>

            <div className='textoFooter'>{/*info como redes sociales */}
              <a className="tituloFooter">Redes</a>
              <p>@atsu_artist</p> 
              <p>+57 312 3476859</p> 
              <p>Envigado - Colombia</p> 
              
            </div>

            <div className='textoFooter'>{/*seccion de todos los productos */}
              <p className="tituloFooter">Productos</p>
              <p></p>
              <a href="./info" className="linkFooter">acrílicos</a> 
              <p></p>
              <a href="./info" className="linkFooter">Digital</a>
              <p></p>
              <a href="./info" className="linkFooter">Estuches</a>
              <p></p>
              <a href="./info" className="linkFooter">Lienzos</a> 
            </div>

            <div className='textoFooter'>{/*mas info*/}
            <a className="tituloFooter">Términos y condiciones</a>
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