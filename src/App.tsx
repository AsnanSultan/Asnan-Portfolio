import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Background />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Muhammad Asnan Sultan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;