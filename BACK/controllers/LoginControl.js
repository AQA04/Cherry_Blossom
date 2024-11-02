import createConnection from '../DB/database.js'; // Ajusta la ruta según sea necesario

//comando para ejecutar este archivo:
//node controllers/LoginControl.js



async function loginUsuario(userName, userPsw) {
  let connection;
  let userFound = false; // Variable para controlar si se encontró el usuario

  try {
    connection = await createConnection();

    // Realizar la consulta a la base de datos
    const [results] = await connection.query('SELECT * FROM Usuarios');
    
    

    
    results.forEach(user => {
      if (userName === user.Nombre && userPsw === user.Contraseña) {
        console.log("Bienvenid@", userName, userPsw);
        userFound = true; // Cambia a true si se encuentra el usuario 
    }});


    return userFound

  } catch (err) {
    console.error('Error en la conexión o en la consulta:', err);

  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
// Llamar a la función
loginUsuario().catch(err => console.error(err));

// Exportar la función como exportación por defecto
export default loginUsuario;