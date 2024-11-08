// controllers/LoginControl.js
import createConnection from '../DB/database.js';

async function LoginControl(Correo, userPsw_ctl) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos para buscar el usuario
        const [results] = await connection.query(
            'SELECT * FROM Usuarios WHERE Correo = ? AND Contraseña = ?',
            [Correo, userPsw_ctl] // Usar los parámetros para la consulta
        );

        return results; // Devolver los resultados

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
export default LoginControl;
