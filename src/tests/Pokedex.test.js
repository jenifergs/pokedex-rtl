import React from 'react';
// import { Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

import Pokedex from '../pages/Pokedex';

function searchAndCheckPokemon(pokemonName) {
  const pokemon = screen.getByText(pokemonName);
  expect(pokemon).toBeInTheDocument();
  expect(pokemon.innerHTML).toBe(pokemonName);
}

/**
 * Verifica os pokemons de uma lista de pokemons estão sendo exibidos coretamente
 * na tela enquanto o usuario clica no botao next
 * startWith é um parametro opcional que indica apartir de qual indice do array de pokemons vamos verificar
 */
async function verifyAllPokemonsAreDisplayer({ startWith = 0, pokemonList }) {
  const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
  // executa um loop para verificar todos os pokemons do indice especificado no parametro startWith
  for (let i = startWith; i < pokemonList.length; i += 1) {
    const { name } = pokemonList[i]; // extrai o nome do pokemon
    searchAndCheckPokemon(name);
    nextButton.click();
  }
}

function getFirePokemons() {
  const firePokemons = pokemons.filter(({ type }) => type === 'Fire');
  const firePokemonsNames = firePokemons.map(({ name }) => ({ name }));
  return { firePokemonsNames, firePokemons };
}

describe('Testando requisito: Pokedex.js', () => {
  beforeEach(async () => {
    renderWithRouter(
      <Pokedex
        pokemons={ pokemons }
        isPokemonFavoriteById={ {} }
      />,
    );
  });

  it(`Verifica se a página contém um heading h2
      com o texto Encountered pokémons`, async () => {
    const h2 = screen.getByRole('heading', { level: 2, name: /encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  it(`Verifica se é exibido o próximo pokémon da lista 
    quando o botão Próximo pokémon é clicado:`, () => {
    const nextButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextButton).toBeInTheDocument();
    searchAndCheckPokemon(pokemons[0].name);
    nextButton.click();
    verifyAllPokemonsAreDisplayer({ startWith: 1, pokemonList: pokemons });

    // Verifica que o que ao clicar o botão de proximo depois de chegar no ultimo pokémon da lista, o primeiro pokémon da lista é exibido
    searchAndCheckPokemon(pokemons[0].name);
  });

  it('Verifica se é mostrado apenas um pokémon por vez;', async () => {
    // para cada pokémon da lista de pokemons, verifica se apenas um pokémon é exibido
    for (let i = 0; i < pokemons.length; i += 1) {
      const pokemonNamesList = screen.getAllByTestId('pokemon-name');
      expect(pokemonNamesList.length).toBe(1);
    }
  });

  it('Verifica se a Pokédex tem os botões de filtro', async () => {
    // Verifica que deve existir um botão de filtragem para cada tipo de pokémon, sem repetição;
    const pokemonTypes = pokemons.map(({ type }) => type); // para cada pokemon da lista, pega o tipo de pokémon
    const pokemonTypesWithOutDuplicates = [...new Set(pokemonTypes)]; // remove as duplicatas do tipo de pokémon
    const pokemonTypesButtons = screen.getAllByTestId('pokemon-type-button'); // pega todos os botões de filtragem

    expect(pokemonTypesButtons.length).toBe(pokemonTypesWithOutDuplicates.length);

    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument(); // verifica se o botão ALL esta na tela
    expect(allButton).toBeVisible();

    // testa um botao de filtro
    const fireButton = screen.getByText(/Fire/i);
    fireButton.click();
    expect(allButton).toBeVisible();

    const { firePokemonsNames, firePokemons } = getFirePokemons();

    await verifyAllPokemonsAreDisplayer({
      pokemonList: firePokemonsNames,
    });
    // volta ao pokemon inicial ? sim
    searchAndCheckPokemon(firePokemons[0].name);
    const filterButtonsNames = pokemonTypesButtons.map((button) => button.innerHTML); // pega os nomes dos botões
    expect(filterButtonsNames).toContain(...pokemonTypesWithOutDuplicates); // verifica se os nomes dos botões são iguais aos tipos de pokémon
    expect(allButton).toBeVisible(); // verifica que o botão ALL está visivel
  });

  it('Verifica se a Pokédex contém um botão para resetar o filtro:', async () => {
    // verifica se o botão ALL existe e esta visivel
    const allButton = screen.getByRole('button', { name: /all/i });
    expect(allButton).toBeInTheDocument(); // verifica se o botão ALL esta na tela
    expect(allButton).toBeVisible(); // verifica que o botão ALL está visivel

    // VERIFICA PRIMEIRO QUE EXISTE UM FILTRO ATIVO
    const fireButton = screen.getByRole('button', { name: /fire/i });
    fireButton.click();
    const { firePokemonsNames } = getFirePokemons();
    await verifyAllPokemonsAreDisplayer({
      pokemonList: firePokemonsNames,
    });

    // CLICA NO BOTAO ALL
    allButton.click();

    // VERIFICA QUE O FILTRO FOI RESETADO
    await verifyAllPokemonsAreDisplayer({
      pokemonList: pokemons,
    });
  });
});
