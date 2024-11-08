const validacionProductos = async () => {
    try {
        const urls = [
            'http://localhost:3000/api/Productos/Lienzo',
            'http://localhost:3000/api/Productos/Estuche',
            'http://localhost:3000/api/Productos/Acrilico',
            'http://localhost:3000/api/Productos/Dibujo%20Digital'
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));

        const productosOk = await Promise.all(responses.map(async (response) => {
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            const data = await response.json();
            console.log("Datos de la API:", data); // Agrega esta línea para ver los datos
            return data; // Asegúrate de que 'data' sea un array de productos
        }));

        return productosOk.flat(); 

    } catch (error) {
        console.error("Error al validar productos:", error);
        return []; // Devuelve un array vacío en caso de error
    }
}

export default validacionProductos;
