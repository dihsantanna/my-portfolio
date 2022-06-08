import React from 'react';

export function Footer() {
  return (
    <footer
      data-testid="footer"
      className={`absolute bottom-0 w-screen h-11 flex items-center justify-center
        text-sm md:text-base md:h-12`}
    >
      { 'Feito com ♥ por Diogo Sant\'Anna' }
    </footer>
  );
}
