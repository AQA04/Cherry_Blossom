import React from 'react'
import acrilicoo from '/src/components/acrilicoo.jpg';
import digital from '/src/components/digital.jpg';
import estuche from '/src/components/estuche.jpg';
import lienzo from '/src/components/lienzo.jpg';
import './Info.css'

import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

const productos = [
  {
    id: 1,
    imagen: acrilicoo,
    titulo: 'Pintura en acrílico',
    texto: <div>
      <p>Encuentra el tamaño que mejor se adapte a tu espacio.</p>
      <p>Los diseños son totalmente personalizados.</p>
      <p>Sencillo: Elegante y minimalista</p>
      <p>Blanco y Negro: Clásico y sofisticado</p>
      <p>Detalle Completo: Riqueza de detalles y matices.</p>
    </div>
  },

 {
  id: 2,
  imagen: digital,
  titulo: 'Dibujo digital',
  texto: <div>
  <p>Todos los dibujos se entregan en formato JPG y con el mismo tamaño.</p>
  <p>Podrás seleccionar el estilo que más te guste como: </p>
  <p>sombra, lineart, blanco y negro, detallado y realismo.</p>
  </div>
},
{
  id: 3,
  imagen: estuche,
  titulo: 'Estuche',
  texto: <div>
    <p>Tenemos varios modelos diferentes que se pueden adaptar a lo que buscas.</p>
    <p>Podrás escoger el diseño que más te guste, tenemos pinturas sencillas, blanco y negro, lineart o detalladas</p>
    <p>podrás personalizarlo como gustes.</p>
  </div>
},
{
  id: 4,
  imagen: lienzo,
  titulo: 'Lienzo',
  texto: 
  <div>
    <p>Tenemos diferentes tamaños para que te puedas adaptar al que más te gusta.</p>
    <p>Los diseños varian según lo que buscas; sencillo, blanco y negro, lineart, detallado.</p>
    <p>Puedes seleccionar el estilo que más te guste.</p>
    </div>
},
];

const Info = () => {
  
  const clickBusquedaProductos = () => {
    window.location.href = './Productos'
  }

  return (
    <div>
      <div>
        <Menu/>
      </div>

      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="contenedor">
            <img src={producto.imagen} alt={producto.titulo} className="imagen" />
            <div className="contenido">
              <h2 className="titulo">{producto.titulo}</h2>
              <p className="texto">{producto.texto}</p>

              <div id='boxBoton'>
              <button type='button' className='botonProductosBusqueda' onClick={clickBusquedaProductos}>Ver más productos</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Info