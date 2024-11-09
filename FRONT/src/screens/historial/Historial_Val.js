// src/components/Historial/Historial_Val.js
import React, { useEffect, useState } from 'react';
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';
import './Historial.css';

const Historial_Val = () => {
    const [historial, setHistorial] = useState([]);
    const [error, setError] = useState(null);
    const idUsuario = 1; // Cambia esto por el ID de usuario que quieras usar

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/Historial/${idUsuario}`);
                if (!response.ok) {
                    throw new Error('Error al buscar el historial');
                }
                const data = await response.json();
                setHistorial(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHistorial();
    }, [idUsuario]);

    return (
        <>
            <Menu />
            <div className="historial-container">
                <h1>Historial de Usuario</h1>
                {error && <p className="error">{error}</p>}
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
                    <p>No hay historial disponible.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Historial_Val;
