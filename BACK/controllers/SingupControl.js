//SingupContro.js
//Sabemos que esta mal escrito, no es singup sino signup, pero nos dimos cuenta demasiado tarde
import createConnection from '../DB/database.js';

//Creamos la funcion con todos los aprametros de registro
async function signupUsuario(userNombre, userApellido, userTelefono, userDireccion, userCorreo, userContraseña) {
    let connection;

    //Almacenamos toda la info en una variable
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

        // Si ya hay un usuario con ese gmail, retornar error
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
        //Error por si acaso
        return { success: false, message: 'Error al crear usuario' };
    } finally {
        //Siempre terminar la conexion
        if (connection) {
            await connection.end();
        }
    }
}

// Exportar la función como exportación por defecto
export default signupUsuario;