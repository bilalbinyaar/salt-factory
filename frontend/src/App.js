// import React from 'react';
// import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Home from './screens/Home';

// function App() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <Home />
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
