import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';
import { Pokemon } from '../components';

describe('Testando requisito: Pokemon.js', () => {
  const pikachu = pokemons[0];
  it('Verifica se é renderizado um card com as inf de determinado pokémon:', () => {
    renderWithRouter(<App />);
    // console.log(pikachu.name);
    const namePikachu = screen.getByTestId('pokemon-name');
    // console.log(name.innerText);
    expect(namePikachu.innerHTML).toBe(pikachu.name);
  });

  it('Verifica se o tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const typePikachu = screen.getByTestId('pokemon-type');
    expect(typePikachu.innerHTML).toBe(pikachu.type);
  });

  it('Verifica se o peso médio do pokémon e sua unidade de medida', () => {
    const { averageWeight: { value, measurementUnit } } = pikachu;
    renderWithRouter(<App />);
    const weightPikachu = screen.getByTestId('pokemon-weight');
    expect(weightPikachu.innerHTML).toBe(`Average weight: ${value} ${measurementUnit}`);
  });

  it('Verifica se o tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const image = screen.getByAltText(`${pikachu.name} sprite`);
    expect(image.src).toBe(pikachu.image);
  });

  it('Verifica se o card do pokemon contem um link mais detalhes na page App', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeDefined();
  });

  it('Verifica se o card do pokemon contem um link com URL /pokemons/<id>', () => {
    renderWithRouter(<Pokemon pokemon={ pikachu } />);
    const idDetails = screen.getByRole('link', { name: /more details/i });
    expect(idDetails).toHaveAttribute('href', '/pokemons/25');
    expect(idDetails).toBeInTheDocument();
  });

  it('Verifica ao clicar no link redireciona p/ a página de detalhes de pokémon', () => {
    renderWithRouter(<App />);
    const idDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(idDetails);
    const heading1 = screen.getByRole('heading', { name: /summary/i });
    const heading2 = screen.getByRole('heading', { name: /game Locations of pikachu/i });

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });

  it('Verifica ao clicar no link se a URL exibida no navegador muda para /pokemon/<id> ',
    () => {
      const { history } = renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const { pathname } = history.location;
      expect(pathname).toBe(`/pokemons/${pikachu.id}`);
    });

  it('Verifica se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ pikachu } isFavorite />);
    const image = screen.getByAltText(`${pikachu.name} is marked as favorite`);
    expect(image.src).toContain('/star-icon.svg');
  });
});
