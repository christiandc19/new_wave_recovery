import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import WESTHOLLYWOOD from '../components/Location-West-Hollywood/WestHollywood'
import WESTHOLLYWOODSECTION from '../components/Location-West-Hollywood/WestHollywoodSection'


const WestHollywood = () => {
  return (
    <>
    <Navbar /> 
    <WESTHOLLYWOOD />
    <WESTHOLLYWOODSECTION />
    <Footer />
     </>
  )
}

export default WestHollywood