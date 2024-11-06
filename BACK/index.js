import loginUsuario from './controllers/LoginControl.js'
import signupUsuario from './controllers/SingupControl.js'
import busquedaProductos from './controllers/productosControl.js'
import busquedaHistorial from './controllers/historialControl.js'
import agregarAlCarrito from './controllers/carritoControl.js'


//signupUsuario("a", "b", "1", "2", "man@gmail.com", "333")

//loginUsuario("Manuel", "222")

//busquedaProductos('Lienzo')

//busquedaHistorial('1')  

//agregarAlCarrito(1, 5, 2) // Juan Pérez agrega 2 Lienzos 20 x 30

// index.js
import express from 'express'; // Asegúrate de usar la sintaxis de importación ES
import config from './config.js'; // Importa tu configuración si es necesario

const app = express(); // Crea la instancia de la aplicación

// Configura el puerto
app.set('port', process.env.PORT || 3000); // Establece el puerto

// Define tus rutas aquí
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});