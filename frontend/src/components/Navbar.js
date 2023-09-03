import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo-div">
            <h2>Saltish</h2>
          </div>
          <div className="nav-listings">
            <ul className="ul-nav">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              {/*<li className="services-dropdown">
                About Us
                 <div className="submenu-wrapper">
                  <ul className="submenu">
                    <Link to="/services-algo-trading">
                      <li>Algo Trading</li>
                    </Link>
                    <Link to="/services-backtesting">
                      <li>Backtest</li>
                    </Link>
                    <li>Service 3</li>
                  </ul>
                </div> 
              </li>*/}
              <li>Products</li>
              <li>Logistics</li>
              <Link to="/get-quote">
                <li>Get Quote</li>
              </Link>
            </ul>
          </div>
          <div className="nav-contact">
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
