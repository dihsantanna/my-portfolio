import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../../src/App';

import { menuTexts } from '../utils/menuTexts';
import { navBarMenu }  from '../utils/data-testId';

describe('Testando componente <NavBar />', () => {
  beforeEach(() => render(<App />));

  it('Verifica se componente renderiza', () => {
    const navBar = screen.queryByTestId(navBarMenu);
    expect(navBar).toBeInTheDocument();
  })

  it(`Verifica se possui os links com os nomes ${menuTexts} e com os hrefs corretos`, () => {
    const inicio = screen.queryByRole('link', { name: /inicio/i}) as HTMLElement;
    const sobre = screen.queryByRole('link', { name: /sobre/i}) as HTMLElement;
    const projetos = screen.queryByRole('link', { name: /projetos/i}) as HTMLElement;
    const curriculo = screen.queryByRole('link', { name: /curriculo/i}) as HTMLElement;

    expect(inicio).toBeInTheDocument();
    expect(inicio.getAttribute('href')).toBe('#inicio');
    expect(sobre).toBeInTheDocument();
    expect(sobre.getAttribute('href')).toBe('#sobre');
    expect(projetos).toBeInTheDocument();
    expect(projetos.getAttribute('href')).toBe('#projetos');
    expect(curriculo).toBeInTheDocument();
    expect(curriculo.getAttribute('href')).toBe('https://bit.ly/diogo-santanna');
  })
})
