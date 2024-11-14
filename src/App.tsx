import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Access } from './components/Access';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="access">
        <Access />
      </section>
      <Footer />
    </div>
  );
}

export default App;