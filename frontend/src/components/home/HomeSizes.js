import React from 'react';
import { FaShirtsinbulk, FaPallet, FaWineBottle } from 'react-icons/fa';
import { GiChipsBag, GiPowderBag } from 'react-icons/gi';
import { BsFillBagFill } from 'react-icons/bs';

const HomeSizes = () => {
  return (
    <div className="home-sizes">
      <div className="container">
        <div className="home-sizes-wrapper">
          <div className="home-sizes-left">
            <h2>Our Supplies</h2>
            <div className="divider-shape"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="home-sizes-right">
            <div className="home-size-item mr mt">
              <FaShirtsinbulk />
              <h3>Bulk Salt</h3>
              <p>Saltish supply high-quality salt with competitive price</p>
            </div>
            <div className="home-size-item mr mt">
              <FaPallet />
              <h3>Wooden Pallet</h3>
              <p>
                Saltish supply rock salt, industrial salt and water softer salt
                over wooden pallet
              </p>
            </div>
            <div className="home-size-item mr mt">
              <GiPowderBag />
              <h3>25kg PP Bags</h3>
              <p>
                Saltish have deicing salt , industrial salt and water softer
                salt on 25 kg pp bags
              </p>
            </div>
            <div className="home-size-item mr mt">
              <BsFillBagFill />
              <h3>Big Bags</h3>
              <p>
                Saltish provide Deicing salt , rock salt and washed salt inside
                big bags
              </p>
            </div>
            <div className="home-size-item mr mt">
              <FaWineBottle />
              <h3>Bottle</h3>
              <p>
                Saltish supply refined salt inside the bottle and cartoon box
              </p>
            </div>
            <div className="home-size-item mr mt">
              <GiChipsBag />
              <h3>Small Bags</h3>
              <p>
                Saltish supply table refined salt and vacuum salt inside small
                bags any size
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSizes;
