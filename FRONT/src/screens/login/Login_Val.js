const validacionLogin = async (userName, userPsw, setErrorMessage) => {
    console.log("por aqui si paso", userName);
    try {
        // Construir la URL con parámetros de consulta
        const url = new URL('http://localhost:3000/api/login');
        url.searchParams.append('userName', userName);
        url.searchParams.append('userPsw_ctl', userPsw); // Asegúrate de que el nombre de la propiedad sea correcto

        const response = await fetch(url, {
            method: 'GET', // Usando GET
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();

        if (data.success) {
            console.log('Inicio de sesión exitoso:', data.user);
        } else {
            setErrorMessage(data.message);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setErrorMessage('Error en el servidor. Inténtalo de nuevo más tarde.');
    }
};

export default validacionLogin;