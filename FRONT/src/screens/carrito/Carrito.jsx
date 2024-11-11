// Carrito.jsx
import React from 'react';
import PropTypes from 'prop-types';
import useCarrito from './Carrito_Val'; // Asegúrate de que la ruta sea correcta
import './carrito.css';

const Carrito = ({ eliminarProducto }) => {
    const { Carrito, error, loading } = useCarrito(); // Usar el hook para obtener los datos del carrito

    if (loading) {
        return <div>Cargando...</div>; // Mostrar un mensaje de carga
    }

    if (error) {
        return <div>Error: {error}</div>; // Mostrar un mensaje de error
    }

    return (
        <div className="carrito-popover">
            <h2>Carrito de Compras</h2>
            <ul>
                {Carrito.length === 0 ? (
                    <li>No hay productos en el carrito.</li>
                ) : (
                    Carrito.map((producto) => (
                        <li key={producto.id}>
                            {producto.nombre} - Cantidad: {producto.cantidad} - Precio: ${producto.precio}
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