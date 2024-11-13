//Pagos.jsx
import React, { useState, useEffect } from 'react';
//importamos estilos
import './Pagos.css';

//Creamos funcion de pagos
const Pagos = () => {
  const [cardNumber, setCardNumber] = useState(''); //Almacena el numero
  const [expiryDate, setExpiryDate] = useState(''); //Almacena la exp
  const [cvc, setCvc] = useState(''); //Almacena el CVC
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //Boton que valida si los datos estan bien
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validación simple
    if (!cardNumber || !expiryDate || !cvc) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    // Simulación de envío de datos
    setSuccess('Pago procesado con éxito.');
    setError('');
  };

  //Submit y devolver a la pagina principal
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.href = './Home'; // Redirige al inicio
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [success]);

  return (
    <div className="payment-form">
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de Tarjeta</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label>Fecha de Expiración</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="123"
          />
        </div>
        <button type="submit">Pagar</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
    </div>
  );
};

export default Pagos;