import React from 'react';
import HomeBanner from '../components/home/HomeBanner';
import HomeAbout from '../components/home/HomeAbout';
import HomeProducts from '../components/home/HomeProducts';
import HomeSizes from '../components/home/HomeSizes';
import HomeCTA from '../components/home/HomeCTA';
import HomeBrands from '../components/home/HomeBrands';

const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeAbout />
      <HomeProducts />
      <HomeSizes />
      <HomeCTA />
      <HomeBrands />
    </React.Fragment>
  );
};

export default Home;
