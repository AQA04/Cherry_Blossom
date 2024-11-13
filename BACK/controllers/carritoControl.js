//carritoControl.js
import createConnection from '../DB/database.js';

async function carritoControl() {
    let connection;

    try {
        connection = await createConnection();

        //Traemos todos los productos de la tabla carrito
       try {
        const [results] = await connection.query(
             'SELECT * FROM Productos'
                );
    
            return results; // Devolver los resultados
       } catch (error) {
        //Error por si las moscas
        res.status(500).send('No se encontraron productos');
       }

    
    } finally {
        //Siempre terminar la conexion
        if (connection) {
            await connection.end();
        }
    }
}

//Exportamos la funcion carritoControl
export default carritoControl;
