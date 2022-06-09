import React from 'react';
import { menuTexts } from '../utils/menuTexts';

export function NavBar() {
  return (
    <nav
      data-testid="navbar-menu"
      className={`hidden md:flex max-w-[60vw] min-w-[46vw] w-[648px] h-10 fixed right-0
        top-[25px] items-center rounded-l-md bg-grafite-700 justify-center`}
    >
      <section
        className="w-[428px] h-6 flex justify-between items-center"
      >
      {
      menuTexts
        .map((link) => (
          <a
            key={`link-${link}`}
            className={`${['Inicio', 'Sobre'].includes(link) ? 'w-[68px]' : 'w-[92px]'}
              text-xl hover:text-lemonade-500 h-6 flex items-center justify-center`}
            href={
              link !== 'Curriculo'
                ? `#${link.toLowerCase()}`
                : 'https://bit.ly/diogo-santanna'
              }
            target={link === 'Curriculo' ? '_blank' : '_self'}
            rel="noreferrer"
          >
            {link}
          </a>
        ))}
      </section>
    </nav>
  );
}
