import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { App } from '../../src/App';

import { footer } from '../utils/data-testId'

describe('Testando componente <Footer />', () => {
  beforeEach(() => render(<App />));

  it('Verifica se componente renderiza', () => {
    const element = screen.queryByTestId(footer);

    expect(element).toBeInTheDocument();
  })

  it('Verifica se componente renderiza o texto "Feito com ♥ por Diogo Sant\'Anna"', () => {
    const element = screen.queryByTestId(footer);

    expect(element).toHaveTextContent('Feito com ♥ por Diogo Sant\'Anna')
  })
})
