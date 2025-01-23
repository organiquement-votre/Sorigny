import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Composants/header.js';
import Home from './Composants/Home';
import CBD from './Composants/CBD';
import Rhums from './Composants/Spiritueux.js';
import Contact from './Composants/ContactForm';
import FooterComponent from './Composants/Footer';
import CGV from './Composants/CGV.js';
import MentionsLegales from './Composants/MentionsLegales.js';
import NotFound from './Composants/404.js';
import ScrollToTop from './Composants/ScrollToTop';
import Distributeur from './Composants/Distributeur';

function App() {
  return (
    <Router basename="/sorigny/">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CBD" element={<CBD />} />
            <Route path="/Spiritueux" element={<Rhums />} />
            <Route path="/distributeur" element={<Distributeur />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;