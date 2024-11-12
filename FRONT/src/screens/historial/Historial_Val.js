
import { useEffect, useState } from 'react';

const useHistorial = () => {
    const [historial, setHistorial] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Estado datos cargados

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Historial');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); // formato JSON
                setHistorial(data); // Almacena datos en el estado
            } catch (error) {
                console.error("Error al obtener el historial:", error);
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchHistorial(); // Ejecuta la función 
    }, []); // dependencia vacía, ejecuae una sola vez al cargar el componente

    return { historial, error, loading }; 
};

export default useHistorial;
