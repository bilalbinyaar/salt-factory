import React from 'react';
import l1 from '../../assets/logistics/1.png';
import l2 from '../../assets/logistics/2.png';
import l3 from '../../assets/logistics/3.png';
import l4 from '../../assets/logistics/4.png';

const LogisticsContent = () => {
  return (
    <div className="logistics">
      <div className="container">
        <div className="log-wrapper">
          <div className="logistics-content">
            <div className="log-textual">
              <h3>Mining Process</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="log-img">
              <img src={l1} alt="logistics procecss" />
            </div>
          </div>
          <div className="logistics-content">
            <div className="log-img">
              {' '}
              <img src={l2} alt="logistics procecss" />
            </div>
            <div className="log-textual">
              <h3>Trucking</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="logistics-content">
            <div className="log-textual">
              <h3>Storage</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="log-img">
              {' '}
              <img src={l3} alt="logistics procecss" />
            </div>
          </div>
          <div className="logistics-content">
            <div className="log-img">
              <img src={l4} alt="logistics procecss" />
            </div>
            <div className="log-textual">
              <h3>Loading Ships</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsContent;
