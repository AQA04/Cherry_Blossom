import express from 'express'; // Asegúrate de usar la sintaxis de importación ES
import cors from 'cors'; // Importa CORS
import config from './config.js'; // Importa tu configuración
import carritoRoutes from './routes/carritoRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import singupRoutes from './routes/singupRoutes.js';
import loginUsuario from './controllers/LoginControl.js';



const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto según tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

// Usa CORS globalmente
app.use(express.json()); // Importa la instancia de la aplicación

// Configura el puerto
app.set('port', config.app.port); // Establece el puerto

// Define tus rutas aquí con CORS aplicado a cada una
app.use('/api/Carrito', cors(corsOptions), carritoRoutes);
app.use('/api/Historial', cors(corsOptions), historialRoutes);
app.use('/api/Login', cors(corsOptions), loginRoutes);
app.use('/api/Productos', cors(corsOptions), productosRoutes);
app.use('/api/Singup', cors(corsOptions), singupRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`);
});

// Llama a la función de login (puedes mover esto a un controlador o ruta)
loginUsuario("Manuel", "222");