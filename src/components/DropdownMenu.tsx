import React from 'react';
import { Menu } from '@headlessui/react';
import { menuTexts } from '../utils/menuTexts';
import dropdownOpen from '../assets/dropdown-open.svg';
import dropdownClose from '../assets/dropdown-close.svg';

export function DropdownMenu() {
  return (
    <nav className={`fixed right-3 top-3 flex items-center w-[313px + 30px + 12px]
    bg-grafite-700 rounded-l-md`}>
      <Menu>
        {({ open }: { open: boolean }) => (
          <>
            <Menu.Items
              className="flex w-[100% - 42px] h-[30px] items-center pr-1 text-[1rem]"
              data-testid="dropdown-menu"
            >
              { menuTexts.map((link) => (
                <Menu.Item
                  key={ `btn-${link}` }>
                  <a
                    className="w-20 text-center"
                    href={
                      link !== 'Curriculo'
                        ? `#${link.toLowerCase()}`
                        : 'https://bit.ly/diogo-santanna'
                      }
                    target={link === 'Curriculo' ? '_blank' : '_self'}
                    rel="noreferrer"
                  >{link}
                  </a>
                </Menu.Item>
              ))}
            </Menu.Items>
            <Menu.Button
            data-testid={`dropdown-btn-${!open ? 'open' : 'close'}`}
            >
              <img
              src={!open ? dropdownOpen : dropdownClose}
              alt={`dropdown-${!open ? 'open' : 'close'}`}
              />
            </Menu.Button>
          </>
        )}
      </Menu>
    </nav>
  );
}
