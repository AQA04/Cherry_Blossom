// routes/loginRoutes.js
import express from 'express';
import loginControl from '../controllers/LoginControl.js'

const router = express.Router();

// Definir la ruta GET para /api/login
router.get('/', async(req, res) => {
    const {userName, userPsw_ctl} = req.body
    try {
        const results = await loginControl(userName, userPsw_ctl)
        res.json(results);

    } catch (error) {
        res.status(500).send('Error al buscar productos');
    }
});

// Exportar el enrutador
export default router;

