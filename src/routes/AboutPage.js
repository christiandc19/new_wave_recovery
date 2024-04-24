import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import AboutSection from '../components/about/AboutSection'

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <AboutSection />
           <Footer />
        </>
    )
}

export default AboutPage
