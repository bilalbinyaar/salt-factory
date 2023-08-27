import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import { Route, Routes  } from 'react-router-dom';
import About from './screens/About';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
    </React.Fragment>
  );
}

export default App;
