import React from 'react'

import Menu from '../menu/Menu';
import AboutUs from '../aboutUs/AboutUs';
import Carrusel from '../carrusel/Carrusel';
import Galeria from '/src/screens/Home/galeria/Galeria';
import Productos from '/src/screens/Home/productos/Productos';
import Footer from '/src/footer/Footer';

export default function Home() {
  return (
    <>
    <Menu />
    <Carrusel />
    <Productos />
    <AboutUs />
    <Galeria />
    <Footer />

    </>

  )
}
