import React, { useState, useEffect, useRef } from 'react';

const SaltStates = () => {
  const projectCountRef = useRef(null);
  const branchCountRef = useRef(null);
  const clientCountRef = useRef(null);

  const [projectCount, setProjectCount] = useState(0);
  const [branchCount, setBranchCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  const projectTotalCount = 250;
  const branchTotalCount = 4;
  const clientTotalCount = 20;

  const duration = 2000; // Duration in milliseconds

  useEffect(() => {
    const startCounter = (ref, totalCount) => {
      const increment = Math.ceil(totalCount / (duration / 10));
      let count = 0;
      const interval = setInterval(() => {
        count = Math.min(count + increment, totalCount);
        ref.current.innerText = count;
        if (count === totalCount) {
          clearInterval(interval);
        }
      }, 10);
    };

    const projectSection = projectCountRef.current;
    const branchSection = branchCountRef.current;
    const clientSection = clientCountRef.current;

    let projectStarted = false;
    let branchStarted = false;
    let clientStarted = false;

    const handleScroll = () => {
      if (!projectStarted && isInViewport(projectSection)) {
        startCounter(projectCountRef, projectTotalCount);
        projectStarted = true;
      }

      if (!branchStarted && isInViewport(branchSection)) {
        startCounter(branchCountRef, branchTotalCount);
        branchStarted = true;
      }

      if (!clientStarted && isInViewport(clientSection)) {
        startCounter(clientCountRef, clientTotalCount);
        clientStarted = true;
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectTotalCount, branchTotalCount, clientTotalCount, duration]);

  return (
    <div className="salt-stats">
      <div className="container">
        <div className="section-title">
          <h2>Statistics</h2>
            <div className="divider-shape"></div>
        </div>
        <div className="salt-stats-wrapper">
          <div className="stats-counter">
            <div className="counter-item" >
                <div className='counter-top'>
                    <h2 ref={projectCountRef}>
                        {projectCount} 
                    </h2>
                    <h2 className='ml-counter'>
                        MT/day
                    </h2>
                </div>
              <h3>Salt Production Capability</h3>
            </div>
            <div className="counter-item" >
                <div className='counter-top'>
                    <h2 ref={branchCountRef}>{branchCount}</h2>
                    <h2 className='ml-counter'>
                       +
                    </h2>
                </div>
              <h3>Salt Brands</h3>
            </div>
            <div className="counter-item" >
                <div className='counter-top'>
                    <h2 ref={clientCountRef}>{clientCount}</h2>
                    <h2 className='ml-counter'>
                       + Countries
                    </h2>
                </div>
              <h3>Our Export References</h3>
            </div>
          </div>
          <div className="stats-content"></div>
        </div>
      </div>
    </div>
  );
};

export default SaltStates;
