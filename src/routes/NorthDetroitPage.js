import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import NORTHDETROIT from '../components/Location-North-Detroit/NorthDetroit'
import NORTHDETROITSECTION from '../components/Location-North-Detroit/NorthDetroitSection'


const NorthDetroit = () => {
  return (
    <>
    <Navbar /> 
    <NORTHDETROIT />
    <NORTHDETROITSECTION />
    <Footer />
     </>
  )
}

export default NorthDetroit