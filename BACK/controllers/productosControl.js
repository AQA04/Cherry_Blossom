// productosControl.js
import createConnection from '../DB/database.js';

async function busquedaProductos(Tipo_Producto) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos segun la categoria que sea necesitada
        const [results] = await connection.query(
            'SELECT ID_Producto, Precio, Descripcion FROM Productos WHERE Tipo_Producto = ?',
            [Tipo_Producto] // Usar el parámetro para la consulta
        );

        return results; // Devolver los resultados

    } catch (err) {
        console.error('Error en la conexión o en la consulta:', err);
        throw err; // Lanzar el error por si acaso

    } finally {
        //Siempre terminar la conexion
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default busquedaProductos;