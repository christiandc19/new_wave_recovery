import React from 'react'
import '../../components/insurance/ServicesIcons.css'


function ServicesIcons(props) {
  return (
        <div className='ServicesIcons-props'>
            <div>
            <img className='image' src= {props.Image} alt="logo" />
            </div>
        </div>
  )
}

export default ServicesIcons;