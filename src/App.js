import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Composants/header.js';
import Home from './Composants/Home';
import CBD from './Composants/CBD'
import Rhums from './Composants/Spiritueux.js'
import Contact from './Composants/ContactForm';
import FooterComponent from './Composants/Footer';
import CGV from './Composants/CGV.js';
import MentionsLegales from './Composants/MentionsLegales.js';
function App() {
  return (
    <Router basename='/Organiquement-Votre-Sorigny'>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CBD" element={<CBD />} /> 
            <Route path="/Spiritueux" element={<Rhums />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;