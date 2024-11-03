import createConnection from '../DB/database.js';

async function agregarAlCarrito(idUsuario, idProducto, cantidad) {
    let connection;

    try {
        connection = await createConnection();

        // Verificar si el producto ya está en el carrito
        const [existingProduct] = await connection.query(
            'SELECT Cantidad FROM Carrito WHERE ID_Usuario = ? AND ID_Producto = ?',
            [idUsuario, idProducto]

        );

                
        const [lastProduct] = await connection.query(
            'SELECT * FROM Carrito',
        );

        if (existingProduct.length > 0) {
            // Si el producto ya existe, actualizar la cantidad
            const nuevaCantidad = existingProduct[0].Cantidad + cantidad;
            await connection.query(
                'UPDATE Carrito SET Cantidad = ? WHERE ID_Usuario = ? AND ID_Producto = ?',
                [nuevaCantidad, idUsuario, idProducto]
            );
            console.log('Cantidad actualizada en el carrito:', nuevaCantidad, lastProduct[0]);
            return console.log("Si actualizo");

        } else {
            // Si el producto no existe, realizar la inserción
            const [result] = await connection.query(
                'INSERT INTO Carrito (ID_Usuario, ID_Producto, Cantidad) VALUES (?, ?, ?)',
                [idUsuario, idProducto, cantidad]
            );
            

            console.log('Producto agregado al carrito:', result, lastProduct[0]);
            return console.log("Si agrego");
        }
    


    } catch (err) {
        console.error('Error en la conexión o en la inserción:', err);
        throw err; // Lanzar el error para que pueda ser manejado por el llamador

    } finally {
        if (connection) {
            await connection.end();
        }
    }
}


// Exportar la función como exportación por defecto
export default agregarAlCarrito;