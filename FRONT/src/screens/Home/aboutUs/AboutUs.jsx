import React from 'react'
import '../aboutUs/aboutUs.css'
import dueña from '/src/components/dueña.jpg'

const AboutUs = () => {
  return (
    <>
    <div id='aboutUs'>
      <div className='aboutUs_texto'>
        
        <h1>¿Quienes somos?</h1>
        <p></p>
        <p>Hola, Soy Lilith, artista detras de Cherry Blossom</p>      
        <p>Soy un artista apasionado por la exploración de emociones y conceptos a través de mi arte. Mi trabajo fusiona acrílicos, estuches, lienzos y dibujos digitales con un enfoque mas caricatura, chibi, anime y dark , buscando dar una satisfaccion personalizada. Cada pieza es una invitación a un diálogo visual y emocional único.</p>
        
        <div>
          icono
        </div>

        </div>

      <div>
        <img src={dueña} alt='fotoDueña' className='aboutUs_imagen'></img>
      </div>

    </div>
  

    </>
  )
}

export default AboutUs