import mysql from 'mysql2/promise';

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alejandro717',
    database: 'cherryBlossom',

    
  });
};

export default createConnection;