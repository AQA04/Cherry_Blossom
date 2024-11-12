import React, { useState } from 'react';
import './Login.css';
import iconoPerfil from '/src/components/iconoPerfil.jpg';
import validacionLogin from './Login_Val';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const LoginComponent = () => {
    const [userMail, setUserMail] = useState(""); 
    const [userPsw, setUserPsw] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("");

    const handleButtonIngresar = async (event) => {
        event.preventDefault();
        console.log("Correo:", userMail);
        console.log("Contraseña:", userPsw);

        
        await validacionLogin(userMail, userPsw, setErrorMessage);
    };

    const handleButtonCancelar = () => {
        setUserMail("");
        setUserPsw("");
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
                        onChange={(e) => setUserMail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id='password'
                        placeholder='Contraseña'
                        className='inputs'
                        value={userPsw} 
                        onChange={(e) => setUserPsw(e.target.value)} 
                        required
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>} 
                    <div className='linkRegistro'>
                        <a href="./Registro">No tienes cuenta?</a>
                    </div>
                    <button type="button" onClick={handleButtonCancelar} className='cancelar'>Cancelar</button>
                    <button type="submit" className='ingresar'>Ingresar</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginComponent;