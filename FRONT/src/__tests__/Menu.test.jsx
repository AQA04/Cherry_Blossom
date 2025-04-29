// src/__tests__/Menu.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../menu/Menu'; // Asegúrate de que la ruta sea correcta

describe('Componente Menu', () => {
  test('debería renderizar el logo y los iconos principales', () => {
    render(<Menu />);

    // Verificar que el logo esté presente
    const logo = screen.getByAltText(/logoMenu/i);
    expect(logo).toBeInTheDocument();

    // Verificar productos (Acrílico, Digital, Estuche, Lienzo)
    expect(screen.getByAltText(/Acrílico/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Digital/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Estuche/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Lienzo/i)).toBeInTheDocument();

    // Verificar íconos grandes (Historial, Perfil, Carrito)
    expect(screen.getByAltText(/Historial/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Perfil/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Carrito/i)).toBeInTheDocument();
  });

  test('debería mostrar el popover del carrito al hacer click en el ícono del carrito', () => {
    render(<Menu />);

    const carritoIcon = screen.getByAltText(/Carrito/i);
    expect(carritoIcon).toBeInTheDocument();

    // Antes de hacer click no debe estar el botón de pagar
    expect(screen.queryByText(/Pagar/i)).not.toBeInTheDocument();

    // Hacer click en el carrito
    fireEvent.click(carritoIcon);

    // Ahora el botón de "Pagar" debe aparecer
    expect(screen.getByText(/Pagar/i)).toBeInTheDocument();
  });
});
