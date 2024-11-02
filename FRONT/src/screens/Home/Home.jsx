import React from 'react'

import Menu from '/src/menu/Menu';
import AboutUs from './aboutUs/AboutUs';
import Carrusel from './carrusel/Carrusel';
import Galeria from './galeria/Galeria';
import Productos from './productos/Productos';
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