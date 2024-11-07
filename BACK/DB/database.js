import mysql from 'mysql2/promise';

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lilith',
    database: 'cherry_bd',    
  });
};

createConnection();

export default createConnection;