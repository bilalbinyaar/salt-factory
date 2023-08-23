import React from 'react';
// import divider from '../assets/divider-img.png';
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

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
                  Get Your Right Solution, Contact <br /> Now With Us.
                </h3>
              </div>
              {/* <div className="divider">
                <img src={divider} alt="divider" />
              </div> */}
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
              <h5>Services</h5>
              <ul className="services-ul">
                <li>Cryptocurrencies</li>
                <li>Stocks</li>
                <li>Forex</li>
                <li>Algorithmic Trading</li>
                <li>Backtest</li>
                <li>Customised Solutions</li>
              </ul>
            </div>
            <div className="bottom-content">
              <h5>Contact</h5>
              <div className="icon-info">
                <BsTelephone />
                <p>+201023292423</p>
              </div>
              <div className="icon-info">
                <BsTelephone />
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
