// Historial.jsx
import React from 'react';
import useHistorial from './Historial_Val'; // Importamos el hook para consumir la API
import './Historial.css';

const Historial = () => {
    const { historial, error, loading } = useHistorial(); // Usamos el hook para obtener los datos

    if (loading) {
        return <p>Cargando...</p>; // Mostrar cuando los datos se están cargando
    }

    if (error) {
        return <p className="error">{error}</p>; // Mostrar el error si ocurre
    }

    return (
        <div>
            <h1>Historial de Usuarios</h1>
            {historial.length > 0 ? (
                <ul>
                    {historial.map((item, index) => (
                        <li key={index}>
                            <p>ID Usuario: {item.Id_Usuario}</p>
                            <p>ID Pago: {item.Id_Pago}</p>
                            <p>Fecha Pedido: {item.FechaPedido}</p>
                            <p>ID Producto: {item.Id_Producto}</p>
                            <p>Cantidad: {item.Cantidad}</p>
                            <p>Subtotal: {item.Subtotal}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay historial disponible.</p> // Si no hay datos
            )}
        </div>
    );
};

export default Historial;
