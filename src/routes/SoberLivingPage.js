import React from 'react'

import Navbar from '../components/navbar/Navbar'
import SOBERLIVING from '../components/SoberLiving/SoberLiving'
import Footer from '../components/footer/Footer'
import SoberLivingSection from '../components/SoberLiving/SoberLivingSection'

const SoberLivingPage = () => {
    return (
        <>
           <Navbar /> 
           <SOBERLIVING />
           <SoberLivingSection />
           <Footer />
        </>
    )
}

export default SoberLivingPage
