import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { App } from '../../src/App';

import { menuTexts } from '../utils/menuTexts';
import { dropdownBtnClose, dropdownBtnOpen, dropdownMenu }  from '../utils/data-testId';

describe('Testando componente <DropdownMenu />', () => {
  beforeEach(() => render(<App />));

  it('Verifica se componente renderiza', async () => {
    const menuBtnOpen = await waitFor(() => screen.findByTestId(dropdownBtnOpen));
    expect(menuBtnOpen).toBeInTheDocument();
  })

  it('Verifica se menu abre', async () => {
    const menuBtnOpen = await waitFor(() => screen.findByTestId(dropdownBtnOpen));
    fireEvent.click(menuBtnOpen)
    const menuOpened = await waitFor(() => screen.findByTestId(dropdownMenu))
    expect(menuOpened).toBeInTheDocument();
  })

  it(`Verifica se menu contém os links com os nomes ${menuTexts}`, async () => {
    const menuBtnOpen = await waitFor(() => screen.findByTestId(dropdownBtnOpen));

    fireEvent.click(menuBtnOpen)

    const menuLinks = await  Promise.all([
      waitFor(() => screen.findByRole('menuitem', { name: /inicio/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /sobre/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /projetos/i })),
      waitFor(() => screen.findByRole('menuitem', { name: /curriculo/i }))
    ]);

    menuLinks.forEach((link) => {
      expect(link).toBeInTheDocument()
    })
  })

  it('Verifica se ao clicar no botão de fechar(X) menu é fechado', async () => {
    let menuBtnOpen: HTMLElement | null = await waitFor(() => screen.findByTestId(dropdownBtnOpen));

    fireEvent.click(menuBtnOpen)

    let menuOpened: HTMLElement | null = await waitFor(() => screen.findByTestId(dropdownMenu))
    menuBtnOpen = screen.queryByTestId(dropdownBtnOpen)

    expect(menuOpened).toBeInTheDocument();
    expect(menuBtnOpen).not.toBeInTheDocument();

    let menuBtnClose: HTMLElement | null = await waitFor(() => screen.findByTestId(dropdownBtnClose))

    expect(menuBtnClose).toBeInTheDocument();

    fireEvent.click(menuBtnClose)

    menuOpened = screen.queryByTestId(dropdownMenu)
    menuBtnClose = screen.queryByTestId(dropdownBtnClose)
    menuBtnOpen = screen.queryByTestId(dropdownBtnOpen)

    expect(menuOpened).not.toBeInTheDocument();
    expect(menuBtnClose).not.toBeInTheDocument();
    expect(menuBtnOpen).toBeInTheDocument();
  })
})
