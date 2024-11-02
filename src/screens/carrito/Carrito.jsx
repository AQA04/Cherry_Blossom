import React from 'react'
import PropTypes from 'prop-types'

import './carrito.css';

const Carrito = ({ productos, eliminarProducto }) => {
  const producto = [];
  return (
    <>
      
      <div className="carrito-popover">
        <h2>Carrito de Compras</h2>
        <ul>
          {productos.length === null ? (
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
    </>
  );
};

// Definición de PropTypes
Carrito.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      nombre: PropTypes.string.isRequired, 
      precio: PropTypes.number.isRequired, 
    })
  ).isRequired, 
  eliminarProducto: PropTypes.func.isRequired, 
};

export default Carrito;