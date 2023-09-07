import React from 'react';
import ProductsBanner from '../components/products/ProductsBanner';
import SaltProducts from '../components/products/SaltProducts';

const Products = () => {
  return (
    <React.Fragment>
      <ProductsBanner />
      <SaltProducts />
    </React.Fragment>
  );
};

export default Products;
