
import express from 'express';
import CarritoControl from '../controllers/carritoControl.js'; 

const router = express.Router();

// Definir la ruta POST para autenticar al carrito
router.get('/', async (req, res) => {
    const results = await CarritoControl();
    
    try {
        res.json(results); 
    } catch (error) {
        res.status(500).send('Error al encontrar producto');
    }
});

// Exportar el enrutador
export default router;
