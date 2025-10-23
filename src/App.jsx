import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter'; 
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />        
      <Gallery />            
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;