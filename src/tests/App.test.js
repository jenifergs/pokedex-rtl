import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando requisito: App.js', () => {
  it('Verifica se o primeiro link possui o texto Home', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
  });

  it('Verifica se o segundo link possui o texto About', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /home/i });
    expect(linkAbout).toBeInTheDocument();
  });

  it('Verifica se o terceiro link possui o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorites).toBeInTheDocument();
  });

  it('Verifica se o link redireciona para a URL / ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    console.log(history);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkHome);
    const { pathname } = history.location;
    console.log(pathname);
    expect(pathname).toBe('/');
  });

  it('Verifica se o link redireciona para a URL /about ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Verifica se o link redireciona p/ a URL /favorites ao clicar em favorite p', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorites);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
