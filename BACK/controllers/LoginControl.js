import createConnection from 'Cherry_Blossom/BACK/database.js';

//comando para ejecutar este archivo:
//node BACK/controllers/LoginControl.js



async function usersBD(userName, userPsw) {
  let connection;

  try {
    connection = await createConnection();

    // Realizar la consulta a la base de datos
    const [results] = await connection.query('SELECT * FROM Usuarios');
    
    results.forEach(user => {
      if(userName == user.Nombre && userPsw == user.Contraseña){
        console.log("Bienvenido", userName)
      }
    });

  } catch (err) {
    console.error('Error en la conexión o en la consulta:', err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

usersBD("Lilith", "1243")

// Llamar a la función
usersBD().catch(err => console.error(err));