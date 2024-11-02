import createConnection from '../DB/database.js';


async function busquedaHistorial(idUsuario) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos filtrando por Id_Usuario
        const [results] = await connection.query(
            'SELECT Id_Usuario, Id_Pago, FechaPedido FROM Historial WHERE Id_Usuario = ?',
            [idUsuario] // Usar el parámetro para la consulta
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