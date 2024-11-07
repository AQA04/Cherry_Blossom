// app.js
import express from 'express';
import config from './config.js';
import carritoRoutes from './routes/carritoRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import singupRoutes from './routes/singupRoutes.js';

const app = express();
app.use(express.json());

app.set('port', config.app.port);

// Define tus rutas aquí
app.use('/api/Carrito', carritoRoutes);
app.use('/api/Historial', historialRoutes);
app.use('/api/Login', loginRoutes);
app.use('/api/Productos', productosRoutes);
app.use('/api/Singup', singupRoutes);

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

export default app;