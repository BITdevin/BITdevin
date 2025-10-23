import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Products from './Products';
import BeforeAfter from './BeforeAfter';
import Gallery from './Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <BeforeAfter />
      <Gallery />
    </>
  );
}