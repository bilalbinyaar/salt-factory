import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './screens/About';
import GetQuote from './screens/GetQuote';
import Contact from './screens/Contact';
import Products from './screens/Products';
import ThankYou from './screens/ThankYou';
import Logistics from './screens/Logistics';

function App() {
  // SCROLL TO TOP
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // SCROLL TO TOP
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/form-submission" element={<ThankYou />} />
        <Route path="/logistics" element={<Logistics />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
