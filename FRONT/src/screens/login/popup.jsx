import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const popUpMessage = () => {
    const notify = () => {
        toast("¡Bienvenido!"); // Mensaje de bienvenida
    };

    return (
        <div>
            <button onClick={notify}>Mostrar Mensaje</button>
            <ToastContainer 
                position="top-right" // Posición del toast
                autoClose={5000} // Tiempo de cierre automático
                hideProgressBar={false} // Mostrar barra de progreso
                newestOnTop={false} // Mostrar el más nuevo en la parte superior
                closeOnClick // Cerrar al hacer clic
                rtl={false} // Soporte para RTL
                pauseOnFocusLoss // Pausar al perder el foco
                draggable // Hacerlo arrastrable
                pauseOnHover // Pausar al pasar el mouse
            />
        </div>
    );
};

export default popUpMessage;