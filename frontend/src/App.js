import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Page404 from './components/Page404';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
