// index.js
import express from 'express'; // Asegúrate de usar la sintaxis de importación ES

import config from './config.js'; // Importa tu configuración
import carritoRoutes from './routes/carritoRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import productosRoutes from './routes/productosRoutes.js';
import singupRoutes from './routes/singupRoutes.js';


import { agregarAlCarrito } from './controllers/carritoControl.js'; // Importar como exportación nombrada

// Ejemplos de uso (puedes descomentarlos cuando los necesites)
// signupUsuario("a", "b", "1", "2", "man@gmail.com", "333");
// loginUsuario("Manuel", "222");
// busquedaProductos('Lienzo');
// busquedaHistorial('1');  
// agregarAlCarrito(1, 5, 2); // Juan Pérez agrega 2 Lienzos 20 x 30

const app = express();
app.use(express.json()); // Importa la instancia de la aplicación

// Configura el puerto
app.set('port', config.app.port); // Establece el puerto

// Define tus rutas aquí
app.use('/api/Carrito', carritoRoutes);
app.use('/api/Historial', historialRoutes);
app.use('/api/Login', loginRoutes);
app.use('/api/Productos', productosRoutes);
app.use('/api/Singup', singupRoutes);

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`);
});