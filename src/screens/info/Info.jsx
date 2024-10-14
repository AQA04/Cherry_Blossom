import React from 'react'
import acrilicoo from '/src/components/acrilicoo.jpg';
import digital from '/src/components/digital.jpg';
import estuche from '/src/components/estuche.jpg';
import lienzo from '/src/components/lienzo.jpg';


const productos = [
  { id: 1, imagen: acrilicoo, titulo: 'Acrílico', texto: 'Descripción del acrílico' },
  { id: 2, imagen: digital, titulo: 'Digital', texto: 'Descripción del acrílico' },
  { id: 3, imagen: estuche, titulo: 'Estuche', texto: 'Descripción del acrílico'},
  { id: 4, imagen: lienzo, titulo: 'Lienzo', texto: 'Descripción del acrílico' },
];

const Info = () => {
  return (
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
  )
}

export default Info