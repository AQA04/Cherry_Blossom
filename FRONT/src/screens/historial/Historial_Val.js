// Historial_Val.js
import { useEffect, useState } from 'react';

const useHistorial = () => {
    const [historial, setHistorial] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para saber si los datos están siendo cargados

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Historial');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); // Convertir los datos a formato JSON
                setHistorial(data); // Almacenar los datos en el estado
            } catch (error) {
                console.error("Error al obtener el historial:", error);
                setError(error.message); // Establecer el mensaje de error
            } finally {
                setLoading(false); // Cambiar el estado de carga a false
            }
        };

        fetchHistorial(); // Ejecutar la función para obtener los datos
    }, []); // La dependencia vacía asegura que esto se ejecute una sola vez al cargar el componente

    return { historial, error, loading }; // Retornar los datos, el error y el estado de carga
};

export default useHistorial;
