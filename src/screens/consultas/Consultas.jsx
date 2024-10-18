import React from 'react';
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';
import lienzo from '/src/components/lienzoEjemplo.jpg';

const Consultas = () => {
  return (
    <>
      <Menu />
      <div id='padresote'>
        <div id="cartas">
          <img src={lienzo} className='imagenesCartas' />
          <div>Lienzo</div>
          <div>Tamaño 30x30</div>
          <button className="botonCartas">Agregar al Carrito</button>
        </div>

        <div id="cartas">
          <img src={lienzo} className='imagenesCartas' />
          <div>Lienzo</div>
          <div>Tamaño 3x3</div>
          <button className="botonCartas">Agregar al Carrito</button>
        </div>

        <div id="cartas">
          <img src={lienzo} className='imagenesCartas' />
          <div>Lienzo</div>
          <div>Tamaño 3x3</div>
          <button className="botonCartas">Agregar al Carrito</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Consultas;