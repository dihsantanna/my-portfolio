import React from 'react';
import { DropdownMenu } from './components/DropdownMenu';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

export function App() {
  return (
    <>
      <DropdownMenu />
      <NavBar />
      <Footer />
    </>
  );
}
