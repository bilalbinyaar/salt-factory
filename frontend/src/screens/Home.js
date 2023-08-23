import React from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeAbout from '../components/home/HomeAbout';
import HomeProducts from '../components/home/HomeProducts';

const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeAbout />
      <HomeProducts />
    </React.Fragment>
  );
};

export default Home;
