import React from 'react'

//Importamos todas las funciones creadas para el home
import Menu from '/src/menu/Menu';
import AboutUs from './aboutUs/AboutUs';
import Carrusel from './carrusel/Carrusel';
import Galeria from './galeria/Galeria';
import ProductosHome from './productosHome/ProductosHome';
import Footer from '/src/footer/Footer';

//Exportamos todas las funciones ejecutadas en orden para darle forma a la pagina
export default function Home() {
  return (
    <>
    <Menu />
    <Carrusel />
    <ProductosHome />
    <AboutUs />
    <Galeria />
    <Footer />
    </>

    )
}