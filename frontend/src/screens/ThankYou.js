import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <React.Fragment>
      <div className="about-banner product-banner">
        <div className="container">
          <div className="banner-heading">
            <h1>Thank You</h1>
            <div className="divider-shape"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="thankyou">
          <h4>
            Thank you for reaching out. We will get back to you as soon as
            possible
          </h4>
          <Link to="/">
            <p>Go back to homepage</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThankYou;
