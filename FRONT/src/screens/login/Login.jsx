import React, { useState } from 'react';
import './Login.css';
import iconoPerfil from '/src/components/iconoPerfil.jpg';
import validacionLogin from './Login_Val';

const LoginComponent = () => {
    const [username, setUsername] = useState("");
    const [userpsw, setUserpsw] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Agregar estado para el mensaje de error

    const handleButtonIngresar = async (event) => {
        event.preventDefault();
        console.log("Usuario:", username);
        console.log("Contraseña:", userpsw);

        // Pasar setErrorMessage a la función de validación
        await validacionLogin(username, userpsw, setErrorMessage);
    };

    const handleButtonCancelar = () => {
        setUsername("");
        setUserpsw("");
        setErrorMessage(""); // Limpiar el mensaje de error al cancelar
    };

    return (
        <div id='superpadre'>
            <div id='box_login'>
                <img src={iconoPerfil} className="iconoPerfil" alt="Icono de perfil" />
                <div className='titulo'>Login</div>
                <form onSubmit={handleButtonIngresar}>
                    <input
                        type='text'
                        id='username'
                        placeholder='Usuario'
                        className='inputs'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id='password'
                        placeholder='Contraseña'
                        className='inputs'
                        value={userpsw}
                        onChange={(e) => setUserpsw(e.target.value)}
                        required
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Mostrar mensaje de error */}
                    <div className='linkRegistro'>
                        <a href="./Registro">No tienes cuenta?</a>
                    </div>
                    <button type="button" onClick={handleButtonCancelar} className='cancelar'>Cancelar</button>
                    <button type="submit" className='ingresar'>Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;