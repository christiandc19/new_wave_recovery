import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DEPRESSION from '../components/MH-Depression/Depression'
import DepressionSection from '../components/MH-Depression/DepressionSection'
import ContactForm from '../components/contact/ContactForm'


const Depression = () => {
  return (
    <>
    <Navbar /> 
    <DEPRESSION />
    <DepressionSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Depression