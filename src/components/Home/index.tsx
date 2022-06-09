import React from 'react';

export function Home() {
  return (
    <section
      id="inicio"
      data-testid="home-section"
      className="h-[795px] w-full md:h-[817px] flex justify-center"
    >
      <div className="grid grid-rows-3 justify-center w-full h-full
        max-w-[1169px] md:grid-cols-2 md:grid-rows-2">
        <div className="w-full h-full flex flex-col items-center">
          <div
          className={`flex flex-col items-center w-[328px] mt-[19px]
            md:w-full md:mt-[135px]`}
          >
            <h1
              className={`text-lemonade-500 text-[3.125rem] font-semibold
                w-full md:text-[3.6rem] lg:text-[4.8rem]`}
            >
              Olá!
              <br/>
              <span className="text-[#fff]">
                Eu Sou
              </span> Diogo
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
