import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando requisito: NotFound.js', () => {
  it('Verifica se página contém um h2 c/ o texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const headingElement = screen.getByRole('heading', { level: 2,
      name: /page requested not found /i });
    expect(headingElement).toBeDefined();
  });

  it('Verifica se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img', { name: /pikachu crying/i });
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
