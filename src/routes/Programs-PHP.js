import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PHP from '../components/Programs-php/Php'
import PhpSection from '../components/Programs-php/PhpSection'
import MenusPrograms from "../components/menus/MenuPrograms";
import Contact2 from "../components/contact/Contact2";



const Php = () => {
  return (
    <>
    <Navbar /> 
    <PHP />
    <PhpSection />
    <MenusPrograms />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Php