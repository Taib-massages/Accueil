import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Composants/header.js';
import Home from './Composants/Home';
import Contact from './Composants/Contact';
import Pilates from './Composants/Pilates';
import BonCadeaux from './Composants/BonCadeaux';
import Prestations from './Composants/Prestations';
import FooterComponent from './Composants/footer.js';
import ScrollToTop from './Composants/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/cadeaux" element={<BonCadeaux />} />
            <Route path="/pilates" element={<Pilates />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/mentions-legales" element={<MentionsLegales />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;