import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import NORTHCITRUS from '../components/Location-North-Citrus/NorthCitrus'
import NORTHCITRUSSECTION from '../components/Location-North-Citrus/NorthCitrusSection'



const NorthCitrus = () => {
  return (
    <>
    <Navbar /> 
    <NORTHCITRUS />
    <NORTHCITRUSSECTION />
    <Footer />
     </>
  )
}

export default NorthCitrus