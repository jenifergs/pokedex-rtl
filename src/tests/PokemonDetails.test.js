import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testando requisito: PokemonDetails.js', () => {
  const pikachu = pokemons[0];
  it('Verifica se as informações detalhadas do pokémon selecionado são mostradas na tela',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const infoNameInDetails = screen.getByText(`${pikachu.name} Details`);
      expect(infoNameInDetails).toBeInTheDocument();

      const notLinkDetails = screen.queryByText(/more details/i);
      expect(notLinkDetails).not.toBeInTheDocument();

      const summary = screen.getByRole('heading', { level: 2, name: /summary/i });
      expect(summary).toBeInTheDocument();

      const paragraphInSumary = screen.getByText(/this intelligent/i);
      expect(paragraphInSumary).toBeInTheDocument();
    });

  it('Teste se existe na página uma seção com os mapas com as localizações do pokémon',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const headingLocation = screen.getByRole('heading', { level: 2,
        name: `Game Locations of ${pikachu.name}` });
      expect(headingLocation).toBeInTheDocument();

      pikachu.foundAt.forEach(({ location, map }, index) => {
        const nameLocation = screen.queryByText(location);
        expect(nameLocation).toBeInTheDocument();

        const imageLocation = screen.getAllByAltText(`${pikachu.name} location`);
        expect(imageLocation[index].src).toBe(map);
      });
    });
  it('Verifica se o usuário pode favoritar um pokémon através da página de detalhes:',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });

      userEvent.click(moreDetails);
      const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
      expect(checkbox).toBeInTheDocument();

      const labelCheckbox = screen.getByLabelText('Pokémon favoritado?');
      expect(labelCheckbox).toBeInTheDocument();

      // como conferir se checked for true o pokemon ta na lista de favoritos, ou falso não estará na lista ?
      // evento de click no checkbox
      // levar na monitoria dia 20
    });
});
