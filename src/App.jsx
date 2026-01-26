import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNav from './components/ScrollToTopOnNav';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false); // Force off for instant stability
  const location = useLocation();

  return (
    <ThemeProvider>
      <ScrollToTopOnNav />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      <ScrollToTop />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
