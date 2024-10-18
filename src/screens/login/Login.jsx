import React from 'react'

import '../login/Login.css'


const Login = () => {
  
  const handleButtonClick = () => {
    window.location.href = './';
  };
  
  return (
    <>
    <div id='superpadre'>
        <div id='box_login'>

          <div class='titulo'>
            Login
          </div>

          <input type='text' id='username' placeholder='Usuario' class='inputs'></input>
          <input type='text' id='password' placeholder='Contraseña' class='inputs'></input>
          
          <button onClick={handleButtonClick} class='ingresar'>Ingresar</button>
        </div>
    </div>
    </>
  )
}

export default Login