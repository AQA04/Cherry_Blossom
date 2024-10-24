import React from 'react'
import './registro.css'
import iconoRegistro from '/src/Components/iconoPerfil.png'


const Registro = () => {

    const handleButtonIngresar = () => {
        window.location.href = './';
      };
    
      const handleButtonCancelar = () => {
        window.location.href = './';
      };

  return (
    <>
    <div id='superpadreReg'>
        <div id='box_Reg'>

            <img src={iconoRegistro} className="iconoRegistro"></img>

            <div className='tituloReg'>
            Registro
            </div>

            <form>
                <input type='text' id='nombreReg' placeholder='Nombre' className='inputsReg' />
                <input type='text' id='apellidoReg' placeholder='Apellido' className='inputsReg' />

 



                <input type='email' id='correo' placeholder='Correo' className='inputsReg' />
                <input type='password' id='contrasenaReg' placeholder='Contraseña' className='inputsReg' />
                <input type='password' id='confirmarContrasenaReg' placeholder='Confirmar Contraseña' className='inputsReg' />
            </form>

            <div>
                <input type='checkbox' id='terminos' name='terminos' />
                <label htmlFor='terminos'>
                    Acepto los terminos y condiciones<a target='_blank' rel='noopener noreferrer'></a>
                </label>
            </div>
            

            <button onClick={handleButtonCancelar} className='cancelarReg'>Cancelar</button>
            <button onClick={handleButtonIngresar} className='registrarReg'>Registrar</button>


        </div>
    </div>
    </>
  )
}

export default Registro