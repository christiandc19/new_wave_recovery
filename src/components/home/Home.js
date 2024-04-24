import React from 'react'
import ServicesSection from '../services/ServicesSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Gallery from '../gallery/Gallery';
import AboutHome from '../about/AboutHome';




const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Whoweare />
    <Gallery />
    <ServicesSection />
    <AboutHome />
    <ContactForm />
    </>
  )
}

export default home
