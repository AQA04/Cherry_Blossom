//Login_Val.js
//Importamos los mensajes bonitos
import { toast } from 'react-toastify';

//Creacion de la funcion validacion
const validacionLogin = async (userMail, userPsw, setErrorMessage) => {
    try {
        //hacemos fetch para comunicarnos con la api creada
        const url = new URL('http://localhost:3000/api/Login');
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }

        //Almacenamos la respuesta en una variable, en formato json
        const usuarios = await response.json();
        let userFound = false;

        //Si el usuario se logea, imprima bienvenido
        if (Array.isArray(usuarios)) {
            for (const usuario of usuarios) {
                if (usuario.Correo === userMail) {
                    userFound = true;
                    toast.success("¡Bienvenido!", userMail); 
                    
                    // Espera 5 segundos antes de redirigir a /Home
                    setTimeout(() => {
                        window.location.href = './Home';
                    }, 5000);
                    
                    break;
                }
            }
        }
        //Error
        if (!userFound) {
            toast.error("Usuario no encontrado");
        }

    } catch (error) {
        console.error('Error al iniciar sesión')
    }
}

//Exportamos
export default validacionLogin