// routes/loginRoutes.js
import express from 'express';
import loginUsuario from '../controllers/LoginControl.js'; // Importar la función del controlador

const router = express.Router();

// Definir la ruta POST para iniciar sesión
router.post('/', async (req, res) => {
    const { userName, userPsw } = req.body; // Obtener el nombre de usuario y la contraseña del cuerpo de la solicitud

    try {
        const isLoggedIn = await loginUsuario(userName, userPsw);
        if (isLoggedIn) {
            res.status(200).json({ message: "Inicio de sesión exitoso" });
        } else {
            res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Endpoint para iniciar sesión. Usa POST para autenticarte.' });
});

// Exportar el enrutador
export default router;