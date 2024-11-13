//Historial_Val.js
import { useEffect, useState } from 'react';

//Creamos la funcion de historial
const useHistorial = () => {

    const [historial, setHistorial] = useState([]); //Estado del carrito
    const [error, setError] = useState(null); //Error
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        //hacemos fetch para comunicarnos con la api creada
        const fetchHistorial = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Historial');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); // Almacena respuesta en data
                setHistorial(data); 
            } catch (error) {
                console.error("Error al obtener el historial:", error);
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchHistorial(); // Ejecuta la función 
    }, []);

    //retornamos la informacion
    return { historial, error, loading }; 
};

//Exportamos
export default useHistorial;
