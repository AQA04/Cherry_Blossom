import React, { useState } from 'react';
import './registro.css';
import iconoRegistro from '/src/Components/iconoPerfil.png';
import signupUsuarioValidation from './Registro_Val';


const Registro = () => {
    const [nombreReg, setNombreReg] = useState("");
    const [apellidoReg, setApellidoReg] = useState("");
    const [telefonoReg, setTelefonoReg] = useState("");
    const [direccionReg, setDireccionReg] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenaReg, setContrasenaReg] = useState("");

    const handleButtonIngresar = () => {
        console.log("Un texto", nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
        signupUsuarioValidation(nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
    };

    const handleButtonCancelar = () => {
        window.location.href = './';
    };

    return (
        <>
            <div id='superpadreReg'>
                <div id='box_Reg'>
                    <img src={iconoRegistro} className="iconoRegistro" alt="Icono de Registro" />

                    <div className='tituloReg'>
                        Registro
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}> {/* Previene el comportamiento por defecto del formulario */}
                        <input 
                            type='text' 
                            id='nombreReg' 
                            placeholder='Nombre' 
                            className='inputsReg' 
                            value={nombreReg} 
                            onChange={(e) => setNombreReg(e.target.value)} 
                        />
                        <input 
                            type='text' 
                            id='apellidoReg' 
                            placeholder='Apellido' 
                            className='inputsReg' 
                            value={apellidoReg} 
                            onChange={(e) => setApellidoReg(e.target.value)} 
                        />
                        <input 
                            type='number' 
                            id='telefonoReg' 
                            placeholder='Telefono' 
                            className='inputsReg' 
                            value={telefonoReg} 
                            onChange={(e) => setTelefonoReg(e.target.value)} 
                        />
                        <input 
                            type='text' 
                            id='direccionReg' 
                            placeholder='Dirección' 
                            className='inputsReg' 
                            value={direccionReg} 
                            onChange={(e) => setDireccionReg(e.target.value)} 
                        />
                        <input 
                            type='email' 
                            id='correo' 
                            placeholder='Correo' 
                            className='inputsReg' 
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                        />
                        <input 
                            type='password' 
                            id='contrasenaReg' 
                            placeholder='Contraseña' 
                            className='inputsReg' 
                            value={contrasenaReg} 
                            onChange={(e) => setContrasenaReg(e.target.value)} 
                        />
                    </form>

                    <div>
                        <input type='checkbox' id='terminos' name='terminos' />
                        <label htmlFor='terminos'>
                            Acepto los terminos y condiciones
                        </label>
                    </div>

                    <button onClick={handleButtonCancelar} className='cancelarReg'>Cancelar</button>
                    <button onClick={handleButtonIngresar} className='registrarReg'>Registrar</button>
                </div>
            </div>
        </>
    );
}

export default Registro;