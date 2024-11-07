// controllers/LoginControl.js
import createConnection from '../DB/database.js'; // Ajusta la ruta según sea necesario

async function loginUsuario(userName, userPsw) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos buscando el usuario por nombre y contraseña
        const [results] = await connection.query(
            'SELECT * FROM Usuarios WHERE Nombre = ? AND Contraseña = ?',
            [userName, userPsw]
        );

        if (results.length > 0) {
            console.log("Bienvenid@", userName);
            return true; // Usuario encontrado
        } else {
            console.log("Usuario o contraseña incorrectos");
            return false; // Usuario no encontrado
        }

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
export default loginUsuario;