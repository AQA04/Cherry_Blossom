// app.js
import express from 'express'; // Importa Express
import config from './config.js'; // Asegúrate de que esta línea esté antes de usar 'config'

const app = express(); // Crea la instancia de la aplicación

// Configura el puerto usando la configuración importada
app.set('port', config.app.port); // Asegúrate de que 'config' esté definido antes de esta línea

// Define tus rutas aquí
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});