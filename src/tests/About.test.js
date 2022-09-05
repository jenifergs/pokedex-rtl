import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testando requisito: About.js', () => {
  it('Verifica se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(heading).toBeInTheDocument();
  });

  it('Verifica  se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const pElements = screen.getAllByText(/pokémons/i);
    expect(pElements.length).toBe(2);
  });

  it('Verifica se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
