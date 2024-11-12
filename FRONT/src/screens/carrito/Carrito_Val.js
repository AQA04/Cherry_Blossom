import { useEffect, useState } from 'react';

const useCarrito = () => {
    const [Carrito, setCarrito] = useState([]); // Estado para almacenar los productos del carrito
    const [error, setError] = useState(null); // Estado para manejar errores
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarrito = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Carrito');
                if (!response.ok) {
                    throw new Error(`Error en la respuesta: ${response.status}`);
                }
                const data = await response.json(); // Convertir los datos a formato JSON
                setCarrito(data); // Almacenar los datos en el estado
            } catch (err) {
                setError(`Error al cargar el carrito: ${err.message}`); // Establecer el mensaje de error
            } finally {
                setLoading(false); // Cambiar el estado de carga a false
            }
        };

        fetchCarrito(); // Ejecutar la función para obtener los datos
    }, []); // La dependencia vacía asegura que esto se ejecute una sola vez al cargar el componente

    // Función para eliminar un producto del estado local
    const eliminarProducto = (producto) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.ID_Producto !== producto.ID_Producto));
    };

    return { Carrito, error, loading, eliminarProducto }; // Retornar los datos, el error y el estado de carga
};

export default useCarrito;
