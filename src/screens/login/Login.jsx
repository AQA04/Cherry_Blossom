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

          <img src={iconoPerfil} className="iconoPerfil"></img>

          <div className='titulo'>
            Login
          </div>

          <input type='text' id='username' placeholder='Usuario' className='inputs'></input>
          <input type="password" id='password' placeholder='Contraseña' className='inputs'></input>
          
          <button onClick={handleButtonCancelar} className='cancelar'>Cancelar</button>
          <button onClick={handleButtonIngresar} className='ingresar'>Ingresar</button>
            

        </div>
    </div>
    </>
  )
}

export default Login