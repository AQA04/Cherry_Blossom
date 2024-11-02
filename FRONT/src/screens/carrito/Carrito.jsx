import React from 'react'
import { useState } from 'react';

import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import './carrito.css';

const carritoUsuario = ({ productos, eliminarProducto }) => {
  
    return (
    <>
        <Menu/>
        <div className="carrito-popover">
      <h2>Carrito de Compras</h2>
      <ul>
        {productos.size === 0 ? (
          <li>No hay productos en el carrito.</li>
        ) : (
          productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
              <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
            </li>
          ))
        )}
      </ul>
    </div>
      <Footer/>
      </>
    );
  };

  export default carritoUsuario;
