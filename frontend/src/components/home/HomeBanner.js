import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import banner1 from '../../assets/1s.webp';
import banner2 from '../../assets/2s.webp';
import banner3 from '../../assets/3s.webp';
import banner1 from '../../assets/home-produtcs/siwa-rock-salt.jpg';

const HomeBanner = () => {
  const sliderItems = [
    {
      imageSrc: banner1,
      //   text1: 'We Do',
      //   text2: 'Algorithmic Crypto<br />Forex, Stocks',
      //   text3: 'Trading',
    },
    {
      imageSrc: banner2,
      // text1: 'We Do',
      // text2: 'Algorithmic Crypto<br />Forex, Stocks',
      // text3: 'Trading',
    },
    {
      imageSrc: banner3,
      //   text1: 'We Do',
      //   text2: 'Algorithmic Crypto<br />Forex, Stocks',
      //   text3: 'Trading',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (
      dots // Move dots inside the slider
    ) => (
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <ul
          style={{
            margin: '0',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div className="container home-banner-container">
            <div key={index}>
              <div className="slider-wrapper">
                <img src={item.imageSrc} alt={`Banner ${index + 1}`} />
                <div className="slider-text">
                  <h3>{item.text1}</h3>
                  <h1 dangerouslySetInnerHTML={{ __html: item.text2 }} />
                  <h1 className="color-text">{item.text3}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeBanner;
