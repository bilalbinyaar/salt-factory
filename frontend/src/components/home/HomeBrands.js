import React from 'react';
import b1 from '../../assets/home-brands/Yamy-Salt-Blue-3.webp';
import b2 from '../../assets/home-brands/Yamy-Salt-Red-2.webp';
import b3 from '../../assets/home-brands/Salt-Bay-2.webp';
import b4 from '../../assets/home-brands/SalRoyal-5.webp';

const HomeBrands = () => {
  const images = [b1, b2, b3, b4];

  return (
    <div className="home-brands">
      <div className="section-heading">
        <h2>Our Brands</h2>
        <div className="divider-shape"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="home-brands-slider">
        {images.map((image, index) => (
          <div key={index} className="brand-slide">
            <img src={image} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBrands;
