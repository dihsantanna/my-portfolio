import React from 'react';
import { contactMeInfo } from '../../utils/constactMeInfo';

export default function ContactMe() {
  return (
    <div
      className="flex flex-col justify-center items-center md:items-start"
    >
      <nav
        className="flex flex-col justify-center w-4/5 md:w-5/6"
      >
        { contactMeInfo.map(({ key, text, href, img }) => (
          <a
          key={ key }
          href={ href }
          target="_blank"
          rel="noreferrer"
          className="flex items-center italic mb-2 text-sm hover:text-lemonade-500 md:text-lg"
          >
            <img
              src={ img.src }
              alt={ img.alt }
              className="w-7 mr-2 md:w-8"
            />
            { text }
          </a>
        )) }
      </nav>
    </div>
  );
}
