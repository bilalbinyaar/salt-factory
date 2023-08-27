import React from 'react';
import c1 from '../../assets/about/FDA.png';
import c2 from '../../assets/about/Halal.png';
import c3 from '../../assets/about/ISO 9001.png';
import c4 from '../../assets/about/ISO 22000.png';

const AboutCertificates = () => {
  return (
    <div className='certificates'>
        <div className="container">
            <div className="section-title">
            <h2>Certifications</h2>
                <div className="divider-shape"></div>
            </div>
            <div className='certificate-wrapper'>
                <img src={c1} alt='certificate' />
                <img src={c2} alt='certificate' />
                <img src={c3} alt='certificate' />
                <img src={c4} alt='certificate' />
            </div>
            <div className='text-center'>
                <p>Quality guaranteed as ISO certified since 2008. Also FDA registered and holding many references in USA.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCertificates