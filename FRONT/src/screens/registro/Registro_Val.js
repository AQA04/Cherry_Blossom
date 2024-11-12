const signupUsuario = async (nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg) => {
    const url = 'http://localhost:3000/api/Singup'; // Asegúrate de que esta URL sea correcta

    const userData = {
        userNombre: nombreReg,
        userApellido: apellidoReg,
        userTelefono: telefonoReg,
        userDireccion: direccionReg,
        userCorreo: correo,
        userContraseña: contrasenaReg,
    };

    console.log(userData); // Imprime los datos del usuario en la consola para depuración
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
            // Si la respuesta es exitosa, imprime el mensaje y el ID del usuario
            console.log(data.message, 'Usuario ID:', data.userId);
        } else {
            // Si hay un error, imprime el mensaje de error
            console.error(data.message);
        }

        return data; // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error:', error.message);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
};

export default signupUsuario;