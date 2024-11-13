const signupUsuario = async (nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg) => {
    const url = 'http://localhost:3000/api/Singup'; 

    const userData = {
        userNombre: nombreReg,
        userApellido: apellidoReg,
        userTelefono: telefonoReg,
        userDireccion: direccionReg,
        userCorreo: correo,
        userContraseña: contrasenaReg,
    };

    console.log(userData); 
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
            
            console.log(data.message, 'Usuario ID:', data.userId);
        } else {
           
            console.error(data.message);
        }

        return data; 
    } catch (error) {
        console.error('Error:', error.message);
        throw error; 
    }
};

export default signupUsuario;