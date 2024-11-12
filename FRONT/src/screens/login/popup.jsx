import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const popUpMessage = () => {
    const notify = () => {
        toast("¡Bienvenido!");
    };

    return (
        <div>
            <button onClick={notify}>Mostrar Mensaje</button>
            <ToastContainer 
                position="top-right" // Posición
                autoClose={5000} // Tiempo de cierre
                hideProgressBar={false} //barra de progreso
                newestOnTop={false} 
                closeOnClick 
                rtl={false} // Soporte para RTL
                pauseOnFocusLoss 
                draggable 
                pauseOnHover
            />
        </div>
    );
};

export default popUpMessage;