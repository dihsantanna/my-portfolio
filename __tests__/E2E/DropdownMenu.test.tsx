import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../../src/App';

import { menuTexts } from '../utils/menuTexts';
import { dropdownBtnClose, dropdownBtnOpen, dropdownMenu }  from '../utils/data-testId';

describe('Testando componente <DropdownMenu />', () => {
  beforeEach(() => render(<App />));

  it('Verifica se componente renderiza', () => {
    const menuBtnOpen = screen.queryByTestId(dropdownBtnOpen);
    expect(menuBtnOpen).toBeInTheDocument();
  })

  it('Verifica se menu abre', async () => {
    const menuBtnOpen = screen.queryByTestId(dropdownBtnOpen);
    fireEvent.click(menuBtnOpen as HTMLElement);
    const menuOpened = await waitFor(() => screen.findByTestId(dropdownMenu));
    expect(menuOpened).toBeInTheDocument();
  })

  it(`Verifica se menu contém os links com os nomes ${menuTexts} com os hrefs corretos`, async () => {
    const menuBtnOpen = screen.queryByTestId(dropdownBtnOpen);

    fireEvent.click(menuBtnOpen as HTMLElement);

    const [inicio, sobre, projetos, curriculo] = await  Promise.all([
      waitFor(() => screen.findByRole('menuitem', { name: /inicio/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /sobre/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /projetos/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /curriculo/i }))
    ]);

    expect(inicio).toBeInTheDocument();
    expect(inicio.getAttribute('href')).toBe('#inicio');
    expect(sobre).toBeInTheDocument();
    expect(sobre.getAttribute('href')).toBe('#sobre');
    expect(projetos).toBeInTheDocument();
    expect(projetos.getAttribute('href')).toBe('#projetos');
    expect(curriculo).toBeInTheDocument();
    expect(curriculo.getAttribute('href')).toBe('https://bit.ly/diogo-santanna');
  })

  it('Verifica se ao clicar no botão de fechar(X) menu é fechado', async () => {
    let menuBtnOpen: HTMLElement | null = screen.queryByTestId(dropdownBtnOpen);

    fireEvent.click(menuBtnOpen as HTMLElement);

    let menuOpened: HTMLElement | null = await waitFor(() => screen.findByTestId(dropdownMenu));
    menuBtnOpen = screen.queryByTestId(dropdownBtnOpen);

    expect(menuOpened).toBeInTheDocument();
    expect(menuBtnOpen).not.toBeInTheDocument();

    let menuBtnClose: HTMLElement | null = screen.queryByTestId(dropdownBtnClose);

    expect(menuBtnClose).toBeInTheDocument();

    fireEvent.click(menuBtnClose as HTMLElement);

    menuOpened = screen.queryByTestId(dropdownMenu);
    menuBtnClose = screen.queryByTestId(dropdownBtnClose);
    menuBtnOpen = screen.queryByTestId(dropdownBtnOpen);

    expect(menuOpened).not.toBeInTheDocument();
    expect(menuBtnClose).not.toBeInTheDocument();
    expect(menuBtnOpen).toBeInTheDocument();
  })
})
