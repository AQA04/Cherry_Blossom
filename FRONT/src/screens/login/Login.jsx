import React from 'react'
import '../login/Login.css'
import iconoPerfil from '/src/Components/iconoPerfil.jpg'
import validacionLogin from './Login.js'

const Login = () => {
  
  const handleButtonIngresar = () => {
    validacionLogin();
  };

  const handleButtonCancelar = () => {
    window.location.href = './';
  };


  return (
    <>
    <div id='superpadre'>
        <div id='box_login'>

          <img src={iconoPerfil} className="iconoPerfil"></img>

          <div className='titulo'>
            Login
          </div>

          <input type='text' id='username' placeholder='Usuario' className='inputs'></input>
          <input type="password" id='password' placeholder='Contraseña' className='inputs'></input>

          <div className='linkRegistro'>
            <a href="./Registro">No tienes cuenta?</a>
          </div>
          
          <button onClick={handleButtonCancelar} className='cancelar'>Cancelar</button>
          <button onClick={handleButtonIngresar} className='ingresar'>Ingresar</button>
            

        </div>
    </div>
    </>
  )
}

export default Login