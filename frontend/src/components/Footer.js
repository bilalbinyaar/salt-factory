import React from 'react';
// import divider from '../assets/divider-img.png';
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="footer-top-left">
              <div className="git">
                <h4>GET IN TOUCH</h4>
              </div>
              <div className="git-2">
                <h3>
                  Get Your Right Service, Contact <br /> Now With Us.
                </h3>
              </div>
            </div>
            <div className="footer-top-rights">
              <div className="footer-contact">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-content">
              <h5>About Company</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis n
              </p>
              <div className="footer-icons">
                <AiFillTwitterSquare />
                <AiFillLinkedin />
              </div>
            </div>
            <div className="bottom-content bottom-content-center">
              <h5>Quick Links</h5>
              <ul className="services-ul">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>
                <Link to="/products">
                  <li>Products</li>
                </Link>
                <Link to="/logistics">
                  <li>Logistics</li>
                </Link>
                <Link to="/get-quote">
                  <li>Get Quote</li>
                </Link>
              </ul>
            </div>
            <div className="bottom-content">
              <h5>Contact</h5>
              <div className="icon-info">
                <BsTelephone />
                <p>+201023292423</p>
              </div>
              <div className="icon-info">
                <BsEnvelope />
                <p>saltish@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
