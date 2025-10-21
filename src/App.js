import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CourtHierarchy from './components/CourtHierarchy';
import Services from './components/Services';
import PracticeAreas from './components/PracticeAreas';
import SpecializedServices from './components/SpecializedServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <About />
      <CourtHierarchy />
      <Services />
      <PracticeAreas />
      <SpecializedServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
