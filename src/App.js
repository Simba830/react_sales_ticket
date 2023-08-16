// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App () {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
