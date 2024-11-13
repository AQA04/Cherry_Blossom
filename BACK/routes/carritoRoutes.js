//CarritoRoutes.js
import express from 'express';
import CarritoControl from '../controllers/carritoControl.js'; 

const router = express.Router();

// Definimos la ruta GET para autenticar al carrito
router.get('/', async (req, res) => {
    const results = await CarritoControl();

    //Retornar resultados
    try {
        res.json(results); 
    } catch (error) {
        res.status(500).send('Error al encontrar producto');
    }
});

// Exportar el enrutador
export default router;
