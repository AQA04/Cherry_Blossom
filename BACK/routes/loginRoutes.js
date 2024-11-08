// routes/loginRoutes.js
import express from 'express';
import LoginControl from '../controllers/LoginControl.js'; // Importar la función del controlador

const router = express.Router();

// Definir la ruta POST para autenticar a un usuario
router.post('/', async (req, res) => {
    const { Correo, userPsw_ctl } = req.body; // Obtener el correo y la contraseña del cuerpo de la solicitud
    try {
        const results = await LoginControl(Correo, userPsw_ctl);
        
        // Verificar si se encontró un usuario
        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado o contraseña incorrecta' });
        }

        // Si la autenticación es exitosa, devolver un objeto con éxito y los datos del usuario
        return res.json({ success: true, user: results[0] }); // Retornar el primer usuario encontrado

    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ success: false, message: 'Error al buscar usuario' });
    }
});

// Exportar el enrutador
export default router;
