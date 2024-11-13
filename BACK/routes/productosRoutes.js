// routes/productosRoutes.js
import express from 'express';
import busquedaProductos from '../controllers/productosControl.js'; 
const router = express.Router();

// Definimos la ruta GET para buscar productos por tipo
router.get('/:tipoProducto', async (req, res) => {

    //Almacenamos la peticion en una variable
    const { tipoProducto } = req.params;
    try {
        const results = await busquedaProductos(tipoProducto);
        res.json(results); // Enviar los resultados como respuesta
    } catch (error) {
        res.status(500).send('Error al buscar productos');
    }
});

// Exportar el enrutador
export default router;