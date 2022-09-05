import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import pokemons from '../data';

describe('Testando requisito: FavoritePokemons.js', () => {
  it('Verifica se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons pokemons={ [] } />);
    const favoriteClean = screen.getByText(/no favorite pokemon found/i);
    expect(favoriteClean).toBeInTheDocument();
  });
  it('Verifica se são exibidos todos os cards de pokémon favoritados', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    pokemons.forEach((pokemon) => {
      const namePokemon = screen.getByText(pokemon.name);
      expect(namePokemon).toBeInTheDocument();
    });
  });
});
