import React, { useState } from 'react';
import './registro.css';
import iconoRegistro from '/src/Components/iconoPerfil.png';
import signupUsuarioValidation from './Registro_Val.js'; // Asegúrate de que la ruta sea correcta
import { ToastContainer, toast } from 'react-toastify'; // Importa ToastContainer y toast
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify

const Registro = () => {
    const [nombreReg, setNombreReg] = useState("");
    const [apellidoReg, setApellidoReg] = useState("");
    const [telefonoReg, setTelefonoReg] = useState("");
    const [direccionReg, setDireccionReg] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenaReg, setContrasenaReg] = useState("");

    const handleButtonIngresar = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        console.log("Un texto", nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
        try {
            const result = await signupUsuarioValidation(nombreReg, apellidoReg, telefonoReg, direccionReg, correo, contrasenaReg);
            if (result.success) {
                // Muestra un toast de éxito
                toast.success(result.message);

                setTimeout(() => {
                  window.location.href = './Home';
              }, 5000);
              
            } else {
                // Muestra un toast de error
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            toast.error('Error al registrar el usuario'); // Muestra un mensaje de error genérico
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