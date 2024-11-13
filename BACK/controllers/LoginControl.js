//LoginControl.js
import createConnection from '../DB/database.js';

async function LoginControl() {
    let connection;

    try {
        connection = await createConnection();

        //Traemos todos los usuarios de la tabla usuarios
       try {
        const [results] = await connection.query(
             'SELECT * FROM Usuarios'
                );
    
            return results; // Devolver los resultados
       } catch (error) {
        res.status(500).send('No se encontraron usuarios');
       }

    
    } finally {
        //Siempre terminar la conexion
        if (connection) {
            await connection.end();
        }
    }
}
// Exportar la función como exportación por defecto
export default LoginControl;
