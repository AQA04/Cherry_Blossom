import cors from 'cors';
import express from 'express';
import config from './config.js';
import carritoRoutes from './routes/carritoRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import singupRoutes from './routes/singupRoutes.js';

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Permitir solo tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Encabezados permitidos
};

// Usa las opciones de CORS globalmente
app.use(cors(corsOptions));

app.use(express.json());

app.set('port', config.app.port);


// Define tus rutas aquí con CORS aplicado a cada una
app.use('/api/Carrito', cors(corsOptions), carritoRoutes);
app.use('/api/Historial', cors(corsOptions), historialRoutes);
app.use('/api/Login', cors(corsOptions), loginRoutes);
app.use('/api/Productos', cors(corsOptions), productosRoutes);
app.use('/api/Singup', cors(corsOptions), singupRoutes);


app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

export default app;