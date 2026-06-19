import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Manufacturers from './pages/Manufacturers.jsx';
import Vendors from './pages/Vendors.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/manufacturers" element={<Manufacturers />} />
          <Route path="/services/vendors" element={<Vendors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
