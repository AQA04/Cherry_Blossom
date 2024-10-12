import React from 'react'
import './Productos.css'
import estuche from '/src/components/estucheEjemplo.jpg'
import lienzo from '/src/components/lienzoEjemplo.jpg'
import acrilico from '/src/components/acrilicoEjemplo.jpg'
import digital from '/src/components/digitalEjemplo.jpg'


export default function Productos() {
  return (
    <>
    <div>
        <div id="tituloProductos"> PRODUCTOS </div>

        <div id="expoProductos">
            <div id='cartas'>
              <img src={estuche} alt='estucheEjemplo' class='imagenesCartas'></img>
              <div class='descripcion'>
                <p>Estuches</p>
                <p>Protege tu móvil con estilo, eligiendo un diseño exclusivo que refleje tu personalidad y gustos.</p>
              </div>
              <button class='botonCartas'>¡Comprar!</button>
            </div>

            <div id='cartas'>
              <img src={lienzo} alt='lienzoEjemplo' class='imagenesCartas'></img>
              <div class='descripcion'>
                <p>Lienzos</p>
                <p>Crea obras únicas en lienzo, impresas con tus diseños o fotos favoritas para decorar cualquier espacio.</p>
              </div>
              <button class='botonCartas'>¡Comprar!</button>
            </div>

            <div id='cartas'>
              <img src={acrilico} alt='acrilicoEjemlpo' class='imagenesCartas'></img>
              <div class='descripcion'>
                <p>Acrilico</p>
                <p>Exhibe tus recuerdos en placas de acrílico de alta calidad, con impresión vibrante que resalta cualquier foto o diseño.</p>
              </div>
              <button class='botonCartas'>¡Comprar!</button>
              </div>

            <div id='cartas'>
              <img src={digital} alt='digitalEjemplo' class='imagenesCartas'></img>
              <div class='descripcion'>
                <p>Digital</p>
                <p>Obtén ilustraciones digitales personalizadas, hechas a medida según tus ideas o fotos, perfectas para regalos únicos</p>
              </div>
              <button class='botonCartas'>¡Comprar!</button>

            </div>

        </div>

    </div>
    </>
  )
}
