/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailView from './components/ProjectDetailView';
import { AnimatePresence } from 'motion/react';

function HomeView() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <ProjectGrid />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/project/:id" element={<ProjectDetailView />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
