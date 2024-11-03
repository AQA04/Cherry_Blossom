import createConnection from '../DB/database.js';

// Tipo_Producto ENUM('Lienzo', 'Acrilico', 'Estuche', 'Dibujo Digital'),

async function busquedaProductos(Tipo_Producto) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos filtrando por Tipo_Producto
        const [results] = await connection.query(
            'SELECT ID_Producto, Precio, Descripcion FROM Productos WHERE Tipo_Producto = ?',
            [Tipo_Producto] // Usar el parámetro para la consulta
        );

        return results;

    } catch (err) {
        console.error('Error en la conexión o en la consulta:', err);
        throw err; // Lanzar el error para que pueda ser manejado por el llamador

    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Llamar a la función con el parámetro 'Lienzo'
busquedaProductos('Lienzo')
    .then(products => {
        console.log('Productos encontrados:', products);
    })
    .catch(err => console.error(err));

// Exportar la función como exportación por defecto
export default busquedaProductos;