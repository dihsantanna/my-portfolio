import React from 'react';
import myPhoto from '../../assets/foto-do-diogo.png';

export function Home() {
  return (
    <section
      id="inicio"
      data-testid="home-section"
      className="h-[795px] w-full md:h-[817px] flex justify-center"
    >
      <div className={`grid grid-rows-6 justify-center w-full h-full
        max-w-[1169px] md:grid-cols-2 md:grid-rows-2 lg:grid-rows-3`}>
        <div className={`row-span-2 w-full flex flex-col items-center justify-between
          md:row-span-1 lg:row-span-2`}>
          <div
          className={`flex flex-col items-center w-[328px] mt-9
            md:w-full md:mt-[135px]`}
          >
            <h1
              className={`text-lemonade-500 text-[3.125rem] font-semibold
                w-full md:w-[375px] md:text-[3.6rem] lg:w-full lg:text-[4.8rem]`}
            >
              Olá!
              <br/>
              <span className="text-[#fff]">
                Eu Sou
              </span> Diogo
            </h1>
          </div>
            <h3
              className="text-[1.35rem] mb-4 md:text-2xl lg:text-[34px]"
            >
              Desenvolvedor Web FullStack
            </h3>
        </div>
        <div
          className={`row-span-3 md:row-span-2 md:flex md:justify-end md:items-center
            lg:row-span-3`}
        >
          <img
            src={myPhoto}
            alt="foto-do-Diogo"
            className="w-[324px] md:w-[400px] md:mb-20 lg:w-[500px] lg:mb-24"
          />
        </div>
      </div>
    </section>
  );
}
