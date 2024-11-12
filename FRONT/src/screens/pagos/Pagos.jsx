import React, { useState, useEffect } from 'react';
import './Pagos.css';

const Pagos = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
    // Aquí podrías agregar lógica para enviar los datos a un servidor
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.href = './Home'; // Redirige a la página de inicio
      }, 5000); // 5000 ms = 5 segundos

      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [success]); // Se ejecuta cuando 'success' cambia

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