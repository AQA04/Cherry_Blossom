///historialControl.js
import createConnection from '../DB/database.js';

async function busquedaHistorial() {
    let connection;

    try {
        connection = await createConnection();

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
        throw err; // Lanzar el error para que pueda ser manejado por el llamador

    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default busquedaHistorial;
