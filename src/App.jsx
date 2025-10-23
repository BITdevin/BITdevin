import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter'; 
import LatestWork from "./components/LatestWork";
// import Gallery from './components/Gallery'; // <-- remove or comment this
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />  
      <LatestWork />      
      {/* <Gallery /> */}  {/* removed duplicate */}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
