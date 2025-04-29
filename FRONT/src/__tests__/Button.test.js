import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('muestra el texto del botón correctamente', () => {
  render(<Button label="Clickeame" />);
  expect(screen.getByText('Clickeame')).toBeInTheDocument();
});
