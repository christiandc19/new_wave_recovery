import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OP from '../components/Programs-op/Op'
import OpSection from '../components/Programs-op/OpSection'
import MenusPrograms from "../components/menus/MenuPrograms";


const Op = () => {
  return (
    <>
    <Navbar /> 
    <OP />
    <OpSection />
    <MenusPrograms />
    <Footer />
     </>
  )
}

export default Op