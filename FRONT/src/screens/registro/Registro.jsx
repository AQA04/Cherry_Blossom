import React, { useState } from 'react';
import './registro.css';
import iconoRegistro from '/src/Components/iconoPerfil.png';
import signupUsuarioValidation from './Registro_Val.js'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Registro = () => {
    const [nombreReg, setNombreReg] = useState("");
    const [apellidoReg, setApellidoReg] = useState("");
    const [telefonoReg, setTelefonoReg] = useState("");
    const [direccionReg, setDireccionReg] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenaReg, setContrasenaReg] = useState("");

    const handleButtonIngresar = async (event) => {
        event.preventDefault(); 
        console.log("Un texto", nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
        try {
            const result = await signupUsuarioValidation(nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
            if (result.success) {
                
                toast.success(result.message);

                setTimeout(() => {
                  window.location.href = './Home';
              }, 5000);
              
            } else {
                
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            toast.error('Error al registrar el usuario');
        }
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

                    <form onSubmit={handleButtonIngresar}>
                        <input 
                            type='text' 
                            id='nombreReg' 
                            placeholder='Nombre' 
                            className='inputsReg' 
                            value={nombreReg} 
                            onChange={(e) => setNombreReg(e.target.value)} 
                            required
                        />
                        <input 
                            type='text' 
                            id='apellidoReg' 
                            placeholder='Apellido' 
                            className='inputsReg' 
                            value={apellidoReg} 
                            onChange={(e) => setApellidoReg(e.target.value)} 
                            required
                        />
                        <input 
                            type='number' 
                            id='telefonoReg' 
                            placeholder='Telefono' 
                            className='inputsReg' 
                            value={telefonoReg} 
                            onChange={(e) => setTelefonoReg(e.target.value)} 
                            required
                        />
                        <input 
                            type='text' 
                            id='direccionReg' 
                            placeholder='Dirección' 
                            className='inputsReg' 
                            value={direccionReg} 
                            onChange={(e) => setDireccionReg(e.target.value)} 
                            required
                        />
                        <input 
                            type='email' 
                            id='correo' 
                            placeholder='Correo' 
                            className='inputsReg' 
                            value={correo} 
                            onChange={(e) => setCorreo(e.target.value)} 
                            required
                        />
                        <input 
                            type='password' 
                            id='contrasenaReg' 
                            placeholder='Contraseña' 
                            className='inputsReg' 
                            value={contrasenaReg} 
                            onChange={(e) => setContrasenaReg(e.target.value)} 
                            required
                        />
                    </form>

                    <div>
                        <input type='checkbox' id='terminos' name='terminos' required />
                        <label htmlFor='terminos'>
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button onClick={handleButtonCancelar} className='cancelarReg'>Cancelar</button>
                    <button type="submit" onClick={handleButtonIngresar} className='registrarReg'>Registrar</button>
                </div>
            </div>
            <ToastContainer /> {/* Agrega el ToastContainer aquí */}
        </>
    );
}

export default Registro;