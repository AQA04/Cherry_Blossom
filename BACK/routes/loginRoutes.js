
import express from 'express';
import LoginControl from '../controllers/LoginControl.js'; // Importar la función del controlador

const router = express.Router();

// Definir la ruta POST para autenticar a un usuario
router.get('/', async (req, res) => {
    const results = await LoginControl();
    
    try {
        res.json(results); // Enviar los resultados como respuesta
    } catch (error) {
        res.status(500).send('Error al buscar usuario');
    }
});

// Exportar el enrutador
export default router;
