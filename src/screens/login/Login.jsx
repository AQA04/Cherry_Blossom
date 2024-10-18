import React from 'react'

import '../login/Login.css'
import iconoPerfil from '/src/Components/iconoPerfil.jpg'

const Login = () => {
  
  const handleButtonIngresar = () => {
    window.location.href = './';
  };

  const handleButtonCancelar = () => {
    window.location.href = './';
  };
  
  return (
    <>
    <div id='superpadre'>
        <div id='box_login'>

          <img src={iconoPerfil} class="iconoPerfil"></img>

          <div class='titulo'>
            Login
          </div>

          <input type='text' id='username' placeholder='Usuario' class='inputs'></input>
          <input type="password" id='password' placeholder='Contraseña' class='inputs'></input>
          
          <button onClick={handleButtonCancelar} class='cancelar'>Cancelar</button>
          <button onClick={handleButtonIngresar} class='ingresar'>Ingresar</button>
            

        </div>
    </div>
    </>
  )
}

export default Login