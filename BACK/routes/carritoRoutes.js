// routes/carritoRoutes.js
import express from 'express';
import { verCarrito, agregarAlCarrito } from '../controllers/carritoControl.js'; // Importar las funciones del controlador

const router = express.Router();

// Definir la ruta GET para ver el carrito
router.get('/', verCarrito);

// Definir la ruta POST para agregar un producto al carrito
router.post('/agregar', async (req, res) => {
    const { idUsuario, idProducto, cantidad } = req.body; // Obtener datos del cuerpo de la solicitud
    try {
        const result = await agregarAlCarrito(idUsuario, idProducto, cantidad);
        res.send(result); // Enviar la respuesta
    } catch (error) {
        res.status(500).send('Error al agregar al carrito'); // Manejo de errores
    }
});

// Exportar el enrutador
export default router;