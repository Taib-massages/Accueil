import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Composants/header.js';
import Home from './Composants/Home';
// import Contact from './Composants/ContactForm';
import Pilates from './Composants/Pilates';
import BonCadeaux from './Composants/BonCadeaux';
import FooterComponent from './Composants/footer.js';
// import CGV from './Composants/CGV.js';
// import MentionsLegales from './Composants/MentionsLegales.js';
// import NotFound from './Composants/404.js';
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
            <Route path="/cadeaux" element={<BonCadeaux />} />
            <Route path="/pilates" element={<Pilates />} />
            {/* <Route path="/cgv" element={<CGV />} /> */}
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