import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import SCHIZOPHRENIA from '../components/MH-Schizophrenia/Schizophrenia'
import SchizophreniaSection from '../components/MH-Schizophrenia/SchizophreniaSection'
import ContactForm from '../components/contact/ContactForm'


const SchizophreniaPage = () => {
  return (
    <>
    <Navbar /> 
    <SCHIZOPHRENIA />
    <SchizophreniaSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default SchizophreniaPage