import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SCHIZOAFFECTIVE from '../components/MH-Schizoaffective/Schizoaffective'
import SchizoaffectiveSection from '../components/MH-Schizoaffective/SchizoaffectiveSection'
import ContactForm from '../components/contact/ContactForm'


const Schizoaffective  = () => {
  return (
    <>
    <Navbar /> 
    <SCHIZOAFFECTIVE />
    <SchizoaffectiveSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Schizoaffective 