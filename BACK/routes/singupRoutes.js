//singupRoutes.js
//Otra vez, sign, no sing
import express from 'express';
import signupUsuario from '../controllers/SingupControl.js';

const router = express.Router();

//Definimos la ruta POST para crear el usuario
router.post('/', async (req, res) => {
    const { userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña } = req.body;

    const resultados = await signupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña);
    
    if (resultados.success) {
        return res.status(201).json(resultados); //retornamos resultados si es efectivo
    } else {
        return res.status(400).json(resultados); //retornamos error si paso algo 
    }
});

// Exportar el enrutador
export default router;