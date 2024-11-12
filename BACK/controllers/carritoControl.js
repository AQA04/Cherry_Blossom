
import createConnection from '../DB/database.js';

async function carritoControl() {
    let connection;

    try {
        connection = await createConnection();

       try {
        const [results] = await connection.query(
             'SELECT * FROM Productos'
                );
    
            return results; // Devolver los resultados
       } catch (error) {
        res.status(500).send('No se encontraron productos');
       }

    
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

export default carritoControl;
