import React from 'react';
import useCarrito from './Carrito_Val'; // Asegúrate de que la ruta sea correcta
import './carrito.css';

const Carrito = () => {
    const { Carrito, error, loading, eliminarProducto } = useCarrito(); // Ahora incluye eliminarProducto

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
                        <li key={producto.ID_Producto}>
                            {producto.Tipo_Producto} - Precio: ${producto.Precio} - Descripción: {producto.Descripcion}
                            <button onClick={() => eliminarProducto(producto)}>Eliminar</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Carrito;
