// controllers/carritoControl.js
import createConnection from '../DB/database.js';

async function verCarrito(req, res) {
    res.send('Carrito Ok');
}

async function agregarAlCarrito(idUsuario, idProducto, cantidad) {
    let connection;

    try {
        connection = await createConnection();

        const [existingProduct] = await connection.query(
            'SELECT Cantidad FROM Carrito WHERE ID_Usuario = ? AND ID_Producto = ?',
            [idUsuario, idProducto]
        );

        if (existingProduct.length > 0) {
            const nuevaCantidad = existingProduct[0].Cantidad + cantidad;
            await connection.query(
                'UPDATE Carrito SET Cantidad = ? WHERE ID_Usuario = ? AND ID_Producto = ?',
                [nuevaCantidad, idUsuario, idProducto]
            );
            return "Cantidad actualizada";
        } else {
            const [result] = await connection.query(
                'INSERT INTO Carrito (ID_Usuario, ID_Producto, Cantidad) VALUES (?, ?, ?)',
                [idUsuario, idProducto, cantidad]
            );
            return "Producto agregado";
        }
    } catch (err) {
        console.error('Error en la conexión o en la inserción:', err);
        throw err;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar las funciones
export { verCarrito, agregarAlCarrito };