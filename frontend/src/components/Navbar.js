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
              <li>Home</li>
              <li className="services-dropdown">
                About Us
                {/* <div className="submenu-wrapper">
                  <ul className="submenu">
                    <Link to="/services-algo-trading">
                      <li>Algo Trading</li>
                    </Link>
                    <Link to="/services-backtesting">
                      <li>Backtest</li>
                    </Link>
                    <li>Service 3</li>
                  </ul>
                </div> */}
              </li>
              <li>Products</li>
              <li>Logistics</li>
              <li>Get Qoute</li>
            </ul>
          </div>
          <div className="nav-contact">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
