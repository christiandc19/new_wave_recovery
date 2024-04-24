import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import DETOXADDERALL from '../components/Detox-Adderall/DetoxAdderall'
import DETOXADDERALLSECTION from '../components/Detox-Adderall/DetoxAdderallSection'
import ContactForm from '../components/contact/ContactForm'


const DetoxAdderall = () => {
  return (
    <>
    <Navbar /> 
    <DETOXADDERALL />
    <DETOXADDERALLSECTION />
    <ContactForm />
    <Footer />
     </>
  )
}

export default DetoxAdderall