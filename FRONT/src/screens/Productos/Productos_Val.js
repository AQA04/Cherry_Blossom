//Productos_Val.js

//Creamos la funcion de validacion para traer los productos
const validacionProductos = async () => {
    try {
        //Instanciamos las urls de todos los tipos de productos para una buena busqueda
        const urls = [
            'http://localhost:3000/api/Productos/Lienzo',
            'http://localhost:3000/api/Productos/Estuche',
            'http://localhost:3000/api/Productos/Acrilico',
            'http://localhost:3000/api/Productos/Dibujo%20Digital'
        ];

        //Almacenamos la informacion del fetch en una respuesta
        const responses = await Promise.all(urls.map(url => fetch(url)));

        //Por si las moscas
        const productosOk = await Promise.all(responses.map(async (response) => {
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            const data = await response.json(); //Almacenamos la respuesta en un json
            console.log("Datos de la API:", data);
            return data;
        }));

        return productosOk.flat(); //Retorna los datos concatenados en un array

    } catch (error) {
        console.error("Error al validar productos:", error);
        return [];
    }
}
//Exportamos
export default validacionProductos;
