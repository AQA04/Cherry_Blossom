import { toast } from 'react-toastify'; // Asegúrate de que esta línea esté presente

const validacionLogin = async (userMail, userPsw, setErrorMessage) => {
    try {
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

        const usuarios = await response.json();
        let userFound = false;

        if (Array.isArray(usuarios)) {
            for (const usuario of usuarios) {
                if (usuario.Correo === userMail) {
                    userFound = true;
                    toast.success("¡Bienvenido!"); // Mostrar mensaje de éxito
                    
                    // Esperar 5 segundos antes de redirigir
                    setTimeout(() => {
                        window.location.href = './Home'; // Redirigir después de 5 segundos
                    }, 5000);
                    
                    break; // Salir del bucle una vez que se encuentra el usuario
                }
            }
        }

        if (!userFound) {
            toast.error("Usuario no encontrado"); // Mostrar mensaje de error
        }

    } catch (error) {
        console.error('Error al iniciar sesión')
    }
}

export default validacionLogin