import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';



import './NorthDetroitSection.css'



const NorthDetroitSection = () => {
  return (
<>
<div className="NorthDetroit-section-header container">
                <h1>LOS ANGELES - NORTH DETROIT</h1><br/>
                <p>Especially early on in your recovery, a structured, comfortable living environment can make all the difference. Come find healing just a few minutes away from shopping at The Grove, hiking in the canyons, and all the sites Hollywood has to offer.
                </p>
</div>


<div className='north-detroit-flex container'>

    <div className='north-citrus-left'>
    <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit2-min.jpg"  alt="Home" loading="lazy"/>
    </div>

    <div className='north-citrus-right'>
      <p>Welcome to our LOS ANGELES - NORTH DETROIT sober living home, a haven of hope and support nestled in the heart of vibrant Los Angeles. We understand that the journey to recovery is unique for each individual, which is why we offer a warm and nurturing environment where residents can rebuild their lives and rediscover their potential.
                </p>
      <h5>Thrive in Sobriety at our Los Angeles Sober Living Home</h5>
        <p>Stay with us and enjoy a guided approach to treatment recovery just off Melrose Ave, only a few minutes from great restaurants in Wilshire, shopping at The Grove, hiking in the canyons, and the allure of all that Hollywood has to offer.<br/><br/>At 55 Silver, we understand that the path to recovery is a personal and unique one. Our mission is to provide a safe and inclusive space where individuals can transition from addiction to a purposeful, substance-free life. With a focus on accountability, personal growth, and holistic well-being, we guide residents towards a future filled with promise.</p>
    </div>

</div>





<div className="NorthCitrus-section-header container">
                <h2>Gallery</h2>
              </div>


              <div className='homes container'>
                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit1-min.jpg"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit2-min.jpg"  alt="Home" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit3.jpg" alt="Home" loading="lazy"/>
                    </div>
                  </Fade>


              </div>


<div className="NorthDetroit-section-header container">
            <br />
            <h1>TALK TO SOMEONE AT OUR NORTH DETROIT HOME TODAY!</h1>
            <p>Our Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />

    </>
  )
}

export default NorthDetroitSection
