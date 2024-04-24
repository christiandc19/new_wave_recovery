import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HUNTINGTONBEACH from '../components/Location-Huntington-Beach/HuntingtonBeach'
import HUNTINGTONBEACHSECTION from '../components/Location-Huntington-Beach/HuntingtonBeachSection'


const HuntingtonBeachPage = () => {
  return (
    <>
    <Navbar /> 
    <HUNTINGTONBEACH />
    <HUNTINGTONBEACHSECTION />
    <Footer />
     </>
  )
}

export default HuntingtonBeachPage