import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { App } from '../../src/App';

import { homeSection } from '../utils/data-testId';

describe('Testando componente <Home />', () => {
  beforeEach(() => render(<App />));

  it('Verifica se componente renderiza', () => {
    const home = screen.queryByTestId(homeSection);
    expect(home).toBeInTheDocument();
  })

  it('Verifica se possui um "id" igual a "inicio"', () => {
    const home = screen.queryByTestId(homeSection);

    expect(home).toHaveAttribute('id', 'inicio')
  })

  it('Verifica se componente possui um h1 com texto "Olá!Eu Sou Diogo"', () => {
  const h1 = screen.queryByRole('heading',
    { level: 1, name: /Olá!([\w ]*)? Diogo$/ }) as HTMLElement;
    expect(h1).toHaveTextContent('Olá!Eu Sou Diogo');
  })
})
