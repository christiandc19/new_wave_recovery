import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import IOP from '../components/Programs-iop/Iop'
import IopSection from '../components/Programs-iop/IopSection'
import MenusPrograms from "../components/menus/MenuPrograms";


const Iop = () => {
  return (
    <>
    <Navbar /> 
    <IOP />
    <IopSection />
    <MenusPrograms />
    <Footer />
     </>
  )
}

export default Iop