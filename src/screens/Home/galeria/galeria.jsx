import React from 'react'
import './galeria.css'

//imagenes
import img1 from '/src/Components/galeriaKillua.jpg'
import img2 from '/src/Components/galeriaEdward.jpg'
import img3 from '/src/Components/galeriaGanyu.jpg'
import img4 from '/src/Components/galeriaWinry.jpg'
import img5 from '/src/Components/galeriaDavier.jpg'


const galeria = () => {
  return (
    <>
    <div>
        <div className='tituloGaleria'>Mi Colección</div>
        
        <div className="galeria">
            <img src={img1} className='imgGaleria img-grande'></img>
            <img src={img2} className='imgGaleria img-mediana'></img>
            <img src={img3} className='imgGaleria img-peque'></img>
            <img src={img4} className='imgGaleria img-mediana'></img>
            <img src={img5} className='imgGaleria img-grande'></img>
        </div>

    </div>
    </>
  )
}

export default galeria