import React from 'react';
import useHistorial from './Historial_Val';
import './Historial.css';

import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';


const Historial = () => {
    const { historial, error, loading } = useHistorial(); //hook para obtener datos

    if (loading) {
        return <p>Cargando...</p>; 
    }

    if (error) {
        return <p className="error">{error}</p>; 
    }

    return (
         <>
         <Menu/>
        <div>
           
            <h1>Historial de Usuarios</h1>
            {historial.length > 0 ? (
                <box>
                    {historial.map((item, index) => (
                        <lista key={index}>
                            <p>ID Usuario: {item.Id_Usuario}</p>
                            <p>ID Pago: {item.Id_Pago}</p>
                            <p>Fecha Pedido: {item.FechaPedido}</p>
                            <p>ID Producto: {item.Id_Producto}</p>
                            <p>Cantidad: {item.Cantidad}</p>
                            <p>Subtotal: {item.Subtotal}</p>
                        </lista>
                    ))}
                </box>
            ) : (
                <mensaje>No hay historial disponible.</mensaje> 
            )}
        </div>
        <Footer/>
         </>
    );
};

export default Historial;
