// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AdminDashboard from "./components/admin/AdminDashboard";
import { AppProvider } from "./store/AppContext";
import { Registration } from "./components/admin/AdminAuth";
import BuyTicket from "./components/BuyTicket";

function App() {
  return (
    <AppProvider>
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
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/buy-ticket" element={<BuyTicket />} />
          </Routes>
          <Registration />
        </main>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
