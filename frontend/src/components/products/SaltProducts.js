import React, { useEffect, useState } from 'react';

const SaltProducts = () => {
  const [saltProducts, setSaltProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/product/salt-products')
      .then((response) => response.json())
      .then((data) => setSaltProducts(data.products))
      .catch((error) => console.error('Error fetching salt products:', error));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="categories-content">
          <div className="body-content">
            <div className="product-card-listings-main">
              {saltProducts?.map((product) => (
                <div className="product-card-listings-inner" key={product._id}>
                  <div className="product-card-listings">
                    <div className="product-lists-img-div">
                      <img
                        className="listed-products-img"
                        src={`http://localhost:5000/api/product/product-photo/${product._id}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="product-det-entry">
                      <h4>{product.name}</h4>
                    </div>
                    <div className="product-det-entry">
                      <p>
                        <strong>{product.price}</strong> <i> / Ton-FOB</i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltProducts;
