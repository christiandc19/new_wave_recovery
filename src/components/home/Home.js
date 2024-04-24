import React from 'react'
import ServicesSection from '../services/ServicesSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import Gallery from '../gallery/Gallery';
import AboutHome from '../about/AboutHome';
import Section4 from '../section4/Section4';




const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Section4 />
    {/* <Gallery /> */}
    <ServicesSection />
    <AboutHome />
    <ContactForm />
    </>
  )
}

export default home
