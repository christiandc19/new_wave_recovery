import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import VENICE from '../components/Location-Venice/Venice'
import VENICESECTION from '../components/Location-Venice/VeniceSection'


const Venice = () => {
  return (
    <>
    <Navbar /> 
    <VENICE />
    <VENICESECTION />
    <Footer />
     </>
  )
}

export default Venice