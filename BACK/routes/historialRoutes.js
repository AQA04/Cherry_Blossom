// routes/historialRoutes.js
import express from 'express';
import busquedaHistorial from '../controllers/historialControl.js'; // Importar la función del controlador

const router = express.Router();

// Definir la ruta GET para buscar todo el historial
router.get('/', async (req, res) => {
    try {
        const results = await busquedaHistorial();
        res.json(results); // Enviar los resultados como respuesta
    } catch (error) {
        res.status(500).send('Error al buscar el historial');
    }
});

// Exportar el enrutador
export default router;
