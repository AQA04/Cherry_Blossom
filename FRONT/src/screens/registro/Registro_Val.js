//Registro_Val.js

//Creamos la funcion de registro
const signupUsuario = async (nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg) => {
    //Consumimos el api de registro
    const url = 'http://localhost:3000/api/Singup'; 

    //Almacenamos la info en userdata para almacenarlo
    const userData = {
        userNombre: nombreReg, //nombre del registro
        userApellido: apellidoReg, //apellido del registro
        userTelefono: telefonoReg, //telefono del registro
        userDireccion: direccionReg, //dir del registro
        userCorreo: correo, //correo del registro, este sera el identificador unico
        userContraseña: contrasenaReg, //contraseña del registro
    };

    console.log(userData); 
    try {
        //hacemos fetch para comunicarnos con la api creada
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json(); //Almacenamos en una variable la respuesta

        if (response.ok) {
            
            console.log(data.message, 'Usuario ID:', data.userId);
        } else {
           
            console.error(data.message);
        }

        return data; //Retornamos la data si esta es valida
    } catch (error) {
        console.error('Error:', error.message);
        throw error; 
    }
};

//Exportamos
export default signupUsuario;