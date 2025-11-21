import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
