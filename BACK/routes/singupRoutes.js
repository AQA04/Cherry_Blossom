import express from 'express';
import signupUsuario from '../controllers/SingupControl.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña } = req.body;

    const resultados = await signupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña);
    
    if (resultados.success) {
        return res.status(201).json(resultados); // 201 para creación exitosa
    } else {
        return res.status(400).json(resultados); // 400 para errores de cliente
    }
});

export default router;