// src/__tests__/Footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer/Footer'; // Asegúrate de que esta ruta sea correcta

describe('Componente Footer', () => {
  test('debería renderizarse correctamente', () => {
    // Renderiza el componente Footer
    render(<Footer />);

    // Verifica que el logo esté presente
    const logoElement = screen.getByAltText(/logoFooter/i);  // Busca el logo por su texto alternativo
    expect(logoElement).toBeInTheDocument();
    // expect(logoElement.src).toContain('logo_negro_sinFondo.png');  <-- Línea eliminada porque no se puede verificar el src real en Jest

    // Verifica que el nombre de la tienda esté presente
    const storeName = screen.getByText(/Cherry Blossom Store/i);
    expect(storeName).toBeInTheDocument();

    // Verifica que los textos de redes sociales estén presentes
    const redesText = screen.getByText(/Redes/i);
    expect(redesText).toBeInTheDocument();

    const socialMedia = screen.getByText(/@atsu_artist/i);
    expect(socialMedia).toBeInTheDocument();

    const phone = screen.getByText(/\+57 312 3476859/i);
    expect(phone).toBeInTheDocument();

    const location = screen.getByText(/Envigado - Colombia/i);
    expect(location).toBeInTheDocument();

    // Verifica los enlaces de productos
    const acrilicosLink = screen.getByText(/acrílicos/i);
    expect(acrilicosLink).toBeInTheDocument();
    expect(acrilicosLink.closest('a')).toHaveAttribute('href', './info');

    const digitalLink = screen.getByText(/Digital/i);
    expect(digitalLink).toBeInTheDocument();
    expect(digitalLink.closest('a')).toHaveAttribute('href', './info');

    const estuchesLink = screen.getByText(/Estuches/i);
    expect(estuchesLink).toBeInTheDocument();
    expect(estuchesLink.closest('a')).toHaveAttribute('href', './info');

    const lienzosLink = screen.getByText(/Lienzos/i);
    expect(lienzosLink).toBeInTheDocument();
    expect(lienzosLink.closest('a')).toHaveAttribute('href', './info');

    // Verifica los enlaces de términos y condiciones
    const termsLink = screen.getByText(/Términos y condiciones/i);
    expect(termsLink).toBeInTheDocument();

    const faqLink = screen.getByText(/Preguntas Frecuentes/i);
    expect(faqLink).toBeInTheDocument();

    const language = screen.getByText(/Español - Colombia/i);
    expect(language).toBeInTheDocument();
  });
});
