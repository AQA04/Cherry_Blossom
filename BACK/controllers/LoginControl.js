// controllers/LoginControl.js
import createConnection from '../DB/database.js'; // Ajusta la ruta según sea necesario

async function LoginControl(userName, userPsw_ctl) {
    let connection;

    try {
        connection = await createConnection();

        // Realizar la consulta a la base de datos buscando el usuario por nombre
        const [results] = await connection.query(
            'SELECT * FROM Usuarios WHERE Nombre = ?',
            [userName]
        );

        console.log(results)
        

        // Verificar si se encontró un usuario
        if (results.length === 0) { // Cambié length() a length
            console.log("Entro a la === 0");
            return []; // Retornar un array vacío si no se encontró el usuario
        }

        const user = results[0];

        // Comparar la contraseña proporcionada con la almacenada (sin hashing)
        if (userPsw_ctl !== user.Contraseña) {
            console.log("Entro a la contraseña")
            return (results); // Retornar un array vacío si la contraseña no coincide
        }

        // Si la autenticación es exitosa, devolver toda la información del usuario
        return (results); // Retornar un array con la información del usuario

    } catch (err) {
        console.error('Error en la conexión o en la consulta:', err);
        return (results); // Retornar un array vacío en caso de error

    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default LoginControl;