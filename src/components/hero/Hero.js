import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Zoom duration={1000}>
    <h1><span>SUCCESS</span> IS HERE</h1>
    </Zoom>
    <Zoom duration={2000}>
    <h1>IT'S A <span>LIFESTYLE.</span></h1>
    </Zoom>

    <Zoom duration={3000}>
    <h2>Levels of Care. Detox. PHP. IOP <br/>Sober Living. Residential</h2>
    </Zoom>

    <Zoom duration={4000}>
    <p>Transitional living for those who have lost everything.<br/>It's never too late for a fresh start!</p>
    </Zoom>

    <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
          <Link to="/contact">
                <button>Call Us</button>
          </Link>
      </LinkRoll>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
