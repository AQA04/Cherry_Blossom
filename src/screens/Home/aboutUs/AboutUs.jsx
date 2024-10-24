import React from 'react'
import './aboutUs.css'
import dueña from '/src/components/dueña.jpg';
import iconoIg from '/src/components/iconoIg.png'


const AboutUs = () => {
  const instagramId = 'https://www.instagram.com/atsu_artist/'
  
  return (
    <>
    <div id='aboutUs'>
      <div className='aboutUs_texto'>
        <h1>¿Quienes somos?</h1>
        <p></p>
        <p>Hola, Soy Lilith, artista detras de Cherry Blossom</p>      
        <p>Soy un artista apasionado por la exploración de emociones y conceptos a través de mi arte. Mi trabajo fusiona acrílicos, estuches, lienzos y dibujos digitales con un enfoque más caricatura, chibi, anime y dark , buscando dar una satisfacción personalizada. Cada pieza es una invitación a un diálogo visual y emocional único.</p>
        
        <div classNameName='a'>
          <img src={iconoIg} href={instagramId} className='iconoIg'></img>
          <a href={instagramId} className='aboutUs_texto'>Mi instagram</a>
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