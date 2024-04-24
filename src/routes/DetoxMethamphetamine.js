import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXMethamphetamine from '../components/Detox-Methamphetamine/DetoxMethamphetamine'
import DETOXMethamphetamineSection from '../components/Detox-Methamphetamine/DetoxMethamphetamineSection'
import ContactForm from '../components/contact/ContactForm'


const DetoxAlcohol = () => {
  return (
    <>
    <Navbar /> 
    <DETOXMethamphetamine />
    <DETOXMethamphetamineSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxAlcohol