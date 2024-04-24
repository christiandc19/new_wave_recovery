import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ADHD from '../components/MH-Adhd/Adhd'
import AdhdSection from '../components/MH-Adhd/AdhdSection'
import ContactForm from '../components/contact/ContactForm'


const Adhd = () => {
  return (
    <>
    <Navbar /> 
    <ADHD />
    <AdhdSection />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Adhd