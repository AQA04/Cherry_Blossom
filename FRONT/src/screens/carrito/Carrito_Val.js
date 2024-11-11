// Carrito_Val.js
import { useEffect, useState } from 'react';

const useCarrito = () => {
    const [Carrito, setCarrito] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para saber si los datos están siendo cargados

    useEffect(() => {
        const fetchCarrito = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Carrito');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); // Convertir los datos a formato JSON
                
                setCarrito(data); // Almacenar los datos en el estado
             // Establecer el mensaje de error
            } finally {
                setLoading(false); // Cambiar el estado de carga a false
            }
           
        };

        fetchCarrito(); // Ejecutar la función para obtener los datos
    }, []); // La dependencia vacía asegura que esto se ejecute una sola vez al cargar el componente

    return { Carrito, error, loading }; // Retornar los datos, el error y el estado de carga
};

export default useCarrito;