import React from 'react'
import acrilicoo from '/src/components/acrilicoo.jpg';
import digital from '/src/components/digital.jpg';
import estuche from '/src/components/estuche.jpg';
import lienzo from '/src/components/lienzo.jpg';
import './Info.css'
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

const productos = [
  { id: 1, imagen: acrilicoo, titulo: 'Pintura en acrílico', 
    texto: 'Encuentra el tamaño que mejor se adapte a tu espacio. Los diseños son totalmente personalizados. Sencillo: Elegante y minimalista Blanco y Negro: Clásico y sofisticado Detalle Completo: Riqueza de detalles y matices. Nota: Cada opción de diseño tiene un costo diferente.' },
  { id: 2, imagen: digital, titulo: 'Dibujo digital',
    texto: 'Todos los dibujos se entregan en formato JPG y con el mismo tamaño. Podras seleccionar el estilo que más te guste como: sombra, lineart, blanco y negro, detallado y realismo. Nota: Cada opción de diseño tiene un costo diferente.' },
  { id: 3, imagen: estuche, titulo: 'Estuche', 
    texto: 'Tenemos varios modelos diferentes que se pueden adaptar a lo que buscas. Podras escoger el diseño que más que te guste, tenemos pinturas sencillas, blanco y negro, lineart o detalladas, podras personalizazrlo como gustes. Nota: Cada opción de diseño tiene un costo diferente.'},
  { id: 4, imagen: lienzo, titulo: 'Lienzo',
    texto: 'Tenemos diferentes tamaños para que te puedas adaptar al que más te gusta. Los diseños varian según lo que buscas; sencillo, blanco y negro, lineart, detallado. Puedes seleccionar el estilo que más te guste. Nota: Cada opción de diseño tiene un costo diferente.' },
];

const Info = () => {
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