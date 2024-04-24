import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXBENZODIAZEPINES from '../components/Detox-Benzodiazepines/DetoxBenzodiazepines'
import DETOXBENZODIAZEPINESSECTION from '../components/Detox-Benzodiazepines/DetoxBenzodiazepinesSection'
import ContactForm from '../components/contact/ContactForm'


const DetoxBenzodiazepines = () => {
  return (
    <>
    <Navbar /> 
    <DETOXBENZODIAZEPINES />
    <DETOXBENZODIAZEPINESSECTION />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxBenzodiazepines