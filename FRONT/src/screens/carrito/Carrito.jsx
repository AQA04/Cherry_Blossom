
import React from 'react';
import useCarrito from './Carrito_Val';
import './carrito.css';

const Carrito = () => {
    const { Carrito, error, loading, eliminarProducto } = useCarrito(); 


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
