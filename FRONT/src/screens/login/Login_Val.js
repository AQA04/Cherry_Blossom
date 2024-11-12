import { toast } from 'react-toastify';

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
                    toast.success("¡Bienvenido!"); 
                    
                    // Espera 5 segundos antes de redirigir a /Home
                    setTimeout(() => {
                        window.location.href = './Home';
                    }, 5000);
                    
                    break;
                }
            }
        }

        if (!userFound) {
            toast.error("Usuario no encontrado");
        }

    } catch (error) {
        console.error('Error al iniciar sesión')
    }
}

export default validacionLogin