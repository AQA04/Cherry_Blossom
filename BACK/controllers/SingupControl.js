import createConnection from '../DB/database.js';



async function singupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña ) {
    let connection;

    const userData = {
        nombre: userNombre,
        apellido: userApellido,
        telefono: userTelefono,
        direccion: userDireccion,
        correo: userCorreo,
        contraseña: userContraseña,
      };

    try {
    // Crear la conexión a la base de datos
    connection = await createConnection();
    
    // Consulta para insertar un nuevo usuario
    const query = `
        INSERT INTO Usuarios (Nombre, Apellido, Telefono, Direccion, Correo, Contraseña, Estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Ejecutar la consulta usando el objeto userData
    const [result] = await connection.execute(query, [
        userData.nombre,
        userData.apellido,
        userData.telefono,
        userData.direccion,
        userData.correo,
        userData.contraseña,
        'activo' // Estado por defecto
    ]);

    console.log(`Usuario creado con ID: ${result.insertId}, ${result.userNombre}`);


    } catch (err) {
    console.error('Error al crear el usuario:', err);
    } finally {
    // Cerrar la conexión si está definida
    if (connection) {
        await connection.end();
    }
    }
}

// Exportar la función como exportación por defecto
export default singupUsuario;