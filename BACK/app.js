//App.js

//Importacion de las librerias que nos sacaron canas
import cors from 'cors';
import express from 'express';

//Importacion de todas las rutas creadas con anterioridad
import config from './config.js';
import carritoRoutes from './routes/carritoRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import singupRoutes from './routes/singupRoutes.js';

//Habilitacion del express
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


// Define las rutas con CORS, una por una
app.use('/api/Carrito', cors(corsOptions), carritoRoutes);
app.use('/api/Historial', cors(corsOptions), historialRoutes);
app.use('/api/Login', cors(corsOptions), loginRoutes);
app.use('/api/Productos', cors(corsOptions), productosRoutes);
app.use('/api/Singup', cors(corsOptions), singupRoutes);


//Deja el puerto principal con un mensaje de "No sea chismoso"
app.get('/', (req, res) => {
    res.send('No sea chismoso');
});

//Exportamos
export default app;