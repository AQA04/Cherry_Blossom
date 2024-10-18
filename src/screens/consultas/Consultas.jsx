import React from 'react';
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';
import lienzo from '/src/components/lienzoEjemplo.jpg';
import './consultas.css'

const Consultas = () => {
  const handleButtonClick = () => {
    window.location.href = './carrito';
  };

  
  return (
  <>
    <Menu/>
    <div>
        <div id="tituloConsultas"> Lienzos </div>

        <div id="expoConsultas">
            <div id='cartasConsultas'>
              <img src={lienzo} alt='estucheEjemplo' class='imagenesConsultas'></img>
              <div class='descripcionConsultas'>
                <p>Lienzo</p>
                <p>20x30</p>
              </div>
              <button class='botonConsultas' onClick={handleButtonClick}>Comprar</button>
            </div>

            <div id='cartasConsultas'>
              <img src={lienzo} alt='lienzoEjemplo' class='imagenesConsultas'></img>
              <div class='descripcionConsultas'>
                <p>Lienzos</p>
                <p>30x45</p>
              </div>
              <button class='botonConsultas' onClick={handleButtonClick}>Comprar</button>
            </div>

            <div id='cartasConsultas'>
              <img src={lienzo} alt='acrilicoEjemlpo' class='imagenesConsultas'></img>
              <div class='descripcionConsultas'>
                <p>Lienzo</p>
                <p>20x20</p>
              </div>
              <button class='botonConsultas'onClick={handleButtonClick}>Comprar</button>
              </div>

            <div id='cartasConsultas'>
              <img src={lienzo} alt='digitalEjemplo' class='imagenesConsultas'></img>
              <div class='descripcionConsultas'>
                <p>Lienzo</p>
                <p>20x40</p>
              </div>
              <button class='botonConsultas'onClick={handleButtonClick}>Comprar</button>

            </div>

        </div>

    </div>
    <Footer/>
    </>
  );
}

export default Consultas;