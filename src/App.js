import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Brochure from './components/Brochure';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Brochure />
      <Footer />
    </div>
  );
}

export default App;
