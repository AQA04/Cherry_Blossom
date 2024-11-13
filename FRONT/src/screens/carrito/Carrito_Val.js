//Carrito_Val.js
import { useEffect, useState } from 'react';

//Creamos el validador de carrito
const useCarrito = () => {
    const [Carrito, setCarrito] = useState([]); // Estado del carrito
    const [error, setError] = useState(null); // Estado errores
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //hacemos fetch para comunicarnos con la api creada
        const fetchCarrito = async () => {
            try {
                //Ruta del api
                const response = await fetch('http://localhost:3000/api/Carrito');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); //Almacena la respuesta en data
                setCarrito(data);
            } catch (err) {
                setError(`Error al cargar el carrito: ${err.message}`); // Establecer el mensaje de error
            } finally {
                setLoading(false); // Cambiar el estado de carga a false
            }
        };

        fetchCarrito(); // Ejecutamos
    }, []);

    // Función para eliminar un producto del estado local
    const eliminarProducto = (producto) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.ID_Producto !== producto.ID_Producto));
    };

    return { Carrito, error, loading, eliminarProducto }; // Retornar los datos, el error y el estado de carga
};

export default useCarrito;
