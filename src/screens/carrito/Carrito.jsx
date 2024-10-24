import React from 'react'
import { useState } from 'react';

import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'

const Carrito = () => {
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);
  
    const agregarProducto = (producto) => {
      setProductos([...productos, producto]);
      setTotal(total + producto.precio);
    };
  
    const eliminarProducto = (producto) => {
      const nuevosProductos = productos.filter((p) => p.id !== producto.id);
      setProductos(nuevosProductos);
      setTotal(total - producto.precio);
    };
  
    return (
    <>
        <Menu/>
      <div classNameName="carrito">
        <h2>Carrito de Compras</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
              <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
        <button onClick={() => agregarProducto({ id: 1, nombre: 'Producto 1', precio: 10 })}>
          Agregar Producto 1
        </button>
        <button onClick={() => agregarProducto({ id: 2, nombre: 'Producto 2', precio: 20 })}>
          Agregar Producto 2
        </button>
      </div>
      <Footer/>
      </>
    );
  };

export default Carrito
