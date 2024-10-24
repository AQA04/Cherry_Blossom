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
      <p>Nota: Cada opción de diseño tiene un costo diferente.</p>
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
  <p>Nota: Cada opción de diseño tiene un costo diferente.</p>
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
    <p>Nota: Cada opción de diseño tiene un costo diferente.</p>
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
    <p>Nota: Cada opción de diseño tiene un costo diferente.</p>
    </div>
},
];

const Info = () => {
  return (
    <div>
      <div>
        <Menu/>
      </div>

      <div classNameName="productos">
        {productos.map((producto) => (
          <div key={producto.id} classNameName="contenedor">
            <img src={producto.imagen} alt={producto.titulo} classNameName="imagen" />
            <div classNameName="contenido">
              <h2 classNameName="titulo">{producto.titulo}</h2>
              <p classNameName="texto">{producto.texto}</p>
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