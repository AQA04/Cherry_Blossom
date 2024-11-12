
import React from 'react';
import PropTypes from 'prop-types';
import useCarrito from './Carrito_Val';
import './carrito.css';

const Carrito = ({ eliminarProducto }) => {
    const { Carrito, error, loading } = useCarrito(); //hook carrito

    if (loading) {
        return <div>Cargando...</div>; 
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="carrito-popover">{/*Contenido del carrito*/}
            <h2>Carrito de Compras</h2>
            <ul>
                {Carrito.length === 0 ? (
                    <li>No hay productos en el carrito.</li>
                ) : (
                    Carrito.map((producto) => (
                        <li key={producto.nombre}>
                            {producto.Tipo_Producto} - Precio: ${producto.Precio}
                            <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

// Definición de PropTypes
Carrito.propTypes = {
    eliminarProducto: PropTypes.func.isRequired,
};

export default Carrito;