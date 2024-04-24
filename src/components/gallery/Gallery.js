import React from 'react'
import './Gallery.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'
import Card4 from '../../assets/card4.jpg'
import Card5 from '../../assets/card5.jpg'

const Cards = () => {
  return (
    <>









<div className='gallery'>


            <div className="cards-header container">
                <h1>CHOOSE THE RIGHT HOME</h1>
                <p>Staying at our sober living housing allows you to navigate your recovery at your own pace in a safe, structured environment. Choosing the right sober home is a crucial step in the recovery process.</p>
            </div>


<div class="card-wrap container">

<div class="tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>NORTH CITRUS, <br/> LOS ANGELES​</h1>
  <p class="animate-text">Stay with us and enjoy a guided approach to treatment recovery just off Melrose Ave, only a few minutes from great restaurants in Wilshire, shopping at The Grove, hiking in the canyons, and the allure of all that Hollywood has to offer.</p>
    <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/north-citrus">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>




<div class="tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>NORTH DETROIT, <br/> LOS ANGELES​</h1>
  <p class="animate-text">Especially early on in your recovery, a structured, comfortable living environment can make all the difference. Come find healing just a few minutes away from shopping at The Grove, hiking in the canyons, and all the sites Hollywood has to offer.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/north-detroit">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>



 
<div class="tile"> 
<Fade top>
<img src={Card3} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>HUNTINGTON BEACH, <br/> CALIFORNIA</h1>
  <p class="animate-text">Recover in a safe community of healing and accountability at our Huntington Beach location. You’ll find all the tools, guidance, and resources you need to return to your normal life among the comfort and amenities of beachside living.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/huntington-beach">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>
  

 <div class="tile"> 
<Fade top>
<img src={Card4} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>WEST HOLLYWOOD, <br/> CALIFORNIA</h1>
  <p class="animate-text">Find long-term sobriety in our luxurious and convenient home in West Hollywood, near all the sights and sounds of The Grove, Beverly Center, Westfield Century City mall, and more.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/west-hollywood">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


  <div class="tile"> 

  <Fade right>
  <img src={Card5} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>VENICE, <br/> CALIFORNIA</h1>
  <p class="animate-text">Shops & restaurants, sports & skate parks, jogging paths, yoga, and countless other seaside activities. Restore your mind and body within the eclectic neighborhoods of Venice Beach</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/venice">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

            <div className="cards-header container">
                <p>Take your time in making this decision. Visit the sober homes you're considering, ask questions, and gather as much information as you can. Ultimately, choose the one that aligns best with your recovery goals, preferences, and needs.</p>
            </div>

</div>
</div>

    </>
  )
}

export default Cards
