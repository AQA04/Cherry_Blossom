import createConnection from '../DB/database.js';

async function signupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña) {
    let connection;

    const userData = {
        nombre: userNombre,
        apellido: userApellido,
        telefono: userTelefono,
        direccion: userDireccion,
        correo: userCorreo,
        contraseña: userContraseña
    };

    try {
        // Crear la conexión a la base de datos
        connection = await createConnection();

        // Verificar si el usuario ya existe
        const [existingUser ] = await connection.query(
            'SELECT * FROM Usuarios WHERE Correo = ?',
            [userData.correo]
        );

        // Si ya existe un usuario con el mismo correo
        if (existingUser .length > 0) {
            return { success: false, message: 'Error, usuario ya existente' };
        } else {
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

            return { success: true, message: `Usuario creado con ID: ${result.insertId}`, userId: result.insertId };
        }

    } catch (error) {
        console.error('Error en la creación de usuario:', error);
        return { success: false, message: 'Error al crear usuario' };
    } finally {
        // Cerrar la conexión si está definida
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default signupUsuario;