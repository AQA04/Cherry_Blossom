// routes/singupRoutes.js
import express from 'express';
import singupUsuario from '../controllers/SingupControl.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña } = req.body;

    try {
        const userId = await singupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña);
        res.status(201).json({ message: 'Usuario creado exitosamente', userId });
    } catch (error) {
        if (error.message === 'Error, usuario ya existente') {
            res.status(409).json({ message: error.message }); // Conflicto
        } else {
            res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
        }
    }
});
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Endpoint para registro de usuarios. Usa POST para crear un nuevo usuario.' });
});
export default router;