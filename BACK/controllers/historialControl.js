import createConnection from '../DB/database.js';


async function busquedaHistorial(idUsuario) {
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
            INNER JOIN Detalle_Pago p ON h.Id_Pago = p.Id_Pago 
            WHERE h.Id_Usuario = ?`,
            [idUsuario] 
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

// Llamar a la función con un Id de usuario específico
busquedaHistorial(1) // Cambia el número según el Id de usuario que desees buscar
    .then(historial => {
        console.log('Historial encontrado:', historial);
    })
    .catch(err => console.error(err));

// Exportar la función como exportación por defecto
export default busquedaHistorial;