// routes/productosRoutes.js
import express from 'express';
import busquedaProductos from '../controllers/productosControl.js'; // Importar la función del controlador

const router = express.Router();

// Definir la ruta GET para buscar productos por tipo
router.get('/:tipoProducto', async (req, res) => {
    const { tipoProducto } = req.params; // Obtener el tipo de producto de los parámetros de la ruta
    try {
        const results = await busquedaProductos(tipoProducto);
        res.json(results); // Enviar los resultados como respuesta
    } catch (error) {
        res.status(500).send('Error al buscar productos');
    }
});

// Exportar el enrutador
export default router;