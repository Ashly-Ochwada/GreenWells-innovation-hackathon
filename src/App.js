import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import WhyParticipate from './components/WhyParticipate'; 


import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Hero />
        <About />
        <Timeline />
        <Prizes />
        <WhyParticipate/>
        <FAQ />
        <Footer />
              
    </div>
  );
}

export default App;
