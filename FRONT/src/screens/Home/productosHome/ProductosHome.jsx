import React from 'react'

import './ProductosHome.css'
import estuche from '/src/components/estucheEjemplo.jpg'
import lienzo from '/src/components/lienzoEjemplo.jpg'
import acrilico from '/src/components/acrilicoEjemplo.jpg'
import digital from '/src/components/digitalEjemplo.jpg'



export default function Productos() {

  const handleButtonClick = () => {
    window.location.href = './info';
  };

  return (
    <>
    <div>
        <div id="tituloProductos"> PRODUCTOS </div>

        <div id="expoProductos">
            <div id='cartas'>
              <img src={estuche} alt='estucheEjemplo' className='imagenesCartas'></img>
              <div className='descripcion'>
                <p>Estuches</p>
                <p>Protege tu móvil con estilo, eligiendo un diseño exclusivo que refleje tu personalidad y gustos.</p>
              </div>
              <button className='botonCartas' onClick={handleButtonClick}>Más Info</button>
            </div>

            <div id='cartas'>
              <img src={lienzo} alt='lienzoEjemplo' className='imagenesCartas'></img>
              <div className='descripcion'>
                <p>Lienzos</p>
                <p>Crea obras únicas en lienzo, impresas con tus diseños o fotos favoritas para decorar cualquier espacio.</p>
              </div>
              <button className='botonCartas' onClick={handleButtonClick}>Más Info</button>
            </div>

            <div id='cartas'>
              <img src={acrilico} alt='acrilicoEjemlpo' className='imagenesCartas'></img>
              <div className='descripcion'>
                <p>acrílico</p>
                <p>Exhibe tus recuerdos en placas de acrílico de alta calidad, con impresión vibrante que resalta cualquier foto o diseño.</p>
              </div>
              <button className='botonCartas'onClick={handleButtonClick}>Más Info</button>
              </div>

            <div id='cartas'>
              <img src={digital} alt='digitalEjemplo' className='imagenesCartas'></img>
              <div className='descripcion'>
                <p>Digital</p>
                <p>Obtén ilustraciones digitales personalizadas, hechas a medida según tus ideas o fotos, perfectas para regalos únicos</p>
              </div>

              <button className='botonCartas'onClick={handleButtonClick}>Más Info</button>

            </div>

        </div>

    </div>
    </>
  )
}
