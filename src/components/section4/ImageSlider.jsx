import React, { useState } from 'react';
import './ImageSlider.css'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import { AiOutlineCheck } from 'react-icons/ai';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className='slider-bg'>
        <div className='image-slider-header container'>
          <Zoom duration={1500}>
            <h1>Check Out Huntington Beach Sober Living Homes</h1>
            <p>At Our Sober Living Homes, we understand that the journey to recovery is unique for each individual. Our mission is to provide a supportive and nurturing environment for those transitioning from addiction treatment to independent living.</p>
          </Zoom>
        </div>

    <div className='image-slider-flex container'>
        
        <div className="image-slider">

            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <FaChevronLeft onClick={prevSlide} />

            <div className='arrow'>
                <FaChevronLeft onClick={prevSlide} />
                <FaChevronRight onClick={nextSlide}/>
            </div>
        </div>

        <div className='image-slider-right'>
            <h1>What Sets Us Apart</h1>
            <p>At New Wave Recovery, we understand the challenges of overcoming addiction and rebuilding your life. Nestled in the vibrant coastal city of Huntington Beach, our sober living home offers a supportive environment where you can embark on your journey to lasting sobriety.</p>
            <ul> <br/>
              <li><span><AiOutlineCheck/> </span>Experienced Staff</li>
              <li><span><AiOutlineCheck/> </span>Structured Environment</li>
              <li><span><AiOutlineCheck/> </span>Holistic Approach</li>
            </ul>

                <div className='slider-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/huntington-beach">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                </div>

        </div>

    </div>

<div className='slider-footer'>
  <h1>A safe therapeutic environment is important.</h1>
</div>


    </div>





    </>
  );
};

export default ImageSlider;
