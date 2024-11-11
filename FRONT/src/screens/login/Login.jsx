import React, { useState } from 'react';
import './Login.css';
import iconoPerfil from '/src/components/iconoPerfil.jpg';
import validacionLogin from './Login_Val';
import { ToastContainer } from 'react-toastify'; // Importar ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos

const LoginComponent = () => {
    const [userMail, setUserMail] = useState(""); // Cambié 'setuserMail' a 'setUser Mail'
    const [userPsw, setUserPsw] = useState(""); // Cambié 'userpsw' a 'userPsw'
    const [errorMessage, setErrorMessage] = useState(""); // Agregar estado para el mensaje de error

    const handleButtonIngresar = async (event) => {
        event.preventDefault();
        console.log("Correo:", userMail);
        console.log("Contraseña:", userPsw); // Cambié 'userpsw' a 'userPsw'

        // Pasar setErrorMessage a la función de validación
        await validacionLogin(userMail, userPsw, setErrorMessage); // Cambié 'userpsw' a 'userPsw'
    };

    const handleButtonCancelar = () => {
        setUserMail(""); // Cambié 'setuserMail' a 'setUser Mail'
        setUserPsw(""); // Cambié 'setUser psw' a 'setUser Psw'
        window.location.href = './Home';
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
                        placeholder='Correo'
                        className='inputs'
                        value={userMail}
                        onChange={(e) => setUserMail(e.target.value)} // Cambié 'setuserMail' a 'setUser Mail'
                        required
                    />
                    <input
                        type="password"
                        id='password'
                        placeholder='Contraseña'
                        className='inputs'
                        value={userPsw} // Cambié 'userpsw' a 'userPsw'
                        onChange={(e) => setUserPsw(e.target.value)} // Cambié 'setUser psw' a 'setUser Psw'
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
            <ToastContainer /> {/* Asegúrate de incluir el ToastContainer aquí */}
        </div>
    );
};

export default LoginComponent;