import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXMarijuana from '../components/Detox-Marijuana/DetoxMarijuana'
import DETOXMarijuanaSection from '../components/Detox-Marijuana/DetoxMarijuanaSection'
import ContactForm from '../components/contact/ContactForm'


const DetoxMarijuana = () => {
  return (
    <>
    <Navbar /> 
    <DETOXMarijuana />
    <DETOXMarijuanaSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxMarijuana