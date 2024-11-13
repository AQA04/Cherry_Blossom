//database
import mysql from 'mysql2/promise';

//Creamos la funcion encargada de la conexion
const createConnection = async () => {
  
  //Datos necesarios para realizar la conexion
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lilith',
    database: 'cherry_bd',    
  });
};

createConnection();

//Exportamos la conexion
export default createConnection;