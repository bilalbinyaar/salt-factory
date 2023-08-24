import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const HomeCTA = () => {
  return (
    <div className="sales-contact">
      <div className="container">
        <div className="sales-contact-wrapper">
          <div className="sales-contact-content">
            <div className="sales-contact-content-left">
              <h3>Saltish is the right choice to be your supplier</h3>
              <p>
                With unmatched care, quality, and attention to detail we have
                been working to manufacture for you, our customer, the best
                Egyptian salt since our company was founded. We proudly have the
                pleasure to provide reliable and excellent products for the
                constantly growing market.
              </p>
              <h3>The Best Egyptian Salt Is Available Now For Your Business</h3>
              <p>
                We honorably guarantee our services because we handle each stage
                of the manufacturing process with care and we follow all
                technical protocols and standards demanded by international
                bodies. All our products are made with good quality raw
                materials and we take care of every minimum detail.
              </p>
            </div>
            <div className="sales-contact-content-right">
              <div className="sales-contact-content-text">
                <h3>Talk to our sales team and get free samples!</h3>
                <button>
                  <AiOutlineWhatsApp />
                  Ask via WhatsApp
                </button>
              </div>
            </div>
          </div>
          {/* <div className="cta-bottom-sales">
            <h3>
              Are you looking for the best salt with the best price in the
              market? Talk with our sales team.
            </h3>
            <button>Get The Best Price</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
