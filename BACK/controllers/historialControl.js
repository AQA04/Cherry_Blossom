///historialControl.js

import createConnection from '../DB/database.js';

async function busquedaHistorial() {
    let connection;

    try {
        connection = await createConnection();

        //Consultamos todos los datos que coincidan con la id del usuario, y traemos los pagos con esa ID, mediante innerjoin
        const [results] = await connection.query(
            `SELECT 
              h.Id_Usuario, 
              h.Id_Pago, 
              h.FechaPedido, 
              p.Id_Producto, 
              p.Cantidad, 
              p.Subtotal 
            FROM Historial h 
            INNER JOIN Detalle_Pago p ON h.Id_Pago = p.Id_Pago`
        );

        return results; // Devolver todos los resultados

    } catch (err) {
        console.error('Error en la conexión o en la consulta:', err);
        throw err; // Lanzar error por si algo falla

    } finally {
        //Siempre terminar la conexion
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default busquedaHistorial;
