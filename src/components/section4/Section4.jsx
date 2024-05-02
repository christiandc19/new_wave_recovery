import React from 'react';

import ImageSlider from './ImageSlider';
import SoberLiving1 from "../../assets/huntington1.webp";
import SoberLiving2 from "../../assets/huntington2.webp";
import SoberLiving3 from "../../assets/huntington3.webp";
import SoberLiving4 from "../../assets/huntington4.webp";
import SoberLiving5 from '../../assets/huntington5.webp'


const Section4 = () => {
  const images = [
    SoberLiving1,
    SoberLiving2,
    SoberLiving3,
    SoberLiving4,
    SoberLiving5

  ];

  return (
          <div className='section4'>
            <ImageSlider images={images} />
          </div>
  );
}

export default Section4

