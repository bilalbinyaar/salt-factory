import React from 'react'
import AboutBanner from '../components/about/AboutBanner'
import AboutIntro from '../components/about/AboutIntro'
import SaltStates from '../components/about/SaltStates'
import AboutCertificates from '../components/about/AboutCertificates'

const About = () => {
  return (
    <React.Fragment>
        <AboutBanner />
        <AboutIntro />
        <SaltStates />
        <AboutCertificates />
    </React.Fragment>
  )
}

export default About