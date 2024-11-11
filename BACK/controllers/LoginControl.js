
import createConnection from '../DB/database.js';

async function LoginControl() {
    let connection;

    try {
        connection = await createConnection();

       try {
        const [results] = await connection.query(
             'SELECT * FROM Usuarios'
                );
    
            return results; // Devolver los resultados
       } catch (error) {
        res.status(500).send('No se encontraron usuarios');
       }

    
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
// Exportar la función como exportación por defecto
export default LoginControl;
