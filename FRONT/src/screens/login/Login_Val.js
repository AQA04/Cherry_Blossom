const validacionLogin = async (userName, userPsw, setErrorMessage) => {
    console.log("por aqui si paso", userName)
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName: userName, userPsw_ctl: userPsw }), // Cambié userName_ctl a userName
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