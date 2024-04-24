import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';



import './VeniceSection.css'

const VeniceSection = () => {
  return (
<>
<div className="NorthCitrus-section-header container">
                <h1>VENICE, CALIFORNIA</h1><br/>
                <p>Shops & restaurants, sports & skate parks, jogging paths, yoga, and countless other seaside activities. Restore your mind and body within the eclectic neighborhoods of Venice Beach
                </p>
</div>

              <div className="NorthCitrus-section-header container">
                <h2>Retreat</h2>
              </div>

              <div className='homes container'>
                  <Fade left>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat2.png" alt="Retreat" loading="lazy"/>
                    </div>
                    </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat3.png" alt="Retreat" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat4.png" alt="Retreat" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade left>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat5.png" alt="Retreat" loading="lazy"/>
                    </div>
                  </Fade>

                  
                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-retreat6.png" alt="Retreat" loading="lazy"/>
                    </div>
                  </Fade>
              </div>


              <div className="NorthCitrus-section-header container">
                <h2>Relax</h2>
              </div>

              <div className='homes container'>
                  <Fade left>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-relax1.png" alt="Relax" loading="lazy"/>
                    </div>
                    </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-relax2.png" alt="Relax" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade right>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-relax3.png" alt="Relax" loading="lazy"/>
                    </div>
                  </Fade>
              </div>



              <div className="NorthCitrus-section-header container">
                <h2>Rest</h2>
              </div>

              <div className='homes container'>
                <Fade left>
                  <div className='thumbnail'>
                    <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-rest1.png" alt="Rest" loading="lazy"/>
                  </div>
              </Fade>

              <Fade top>
                <div className='thumbnail'>
                  <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-rest2.png" alt="Rest" loading="lazy"/>
                </div>
              </Fade>

              <Fade right>
              <div className='thumbnail'>
                <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-rest3.png" alt="Rest" loading="lazy"/>
              </div>
              </Fade>

              <Fade left>
              <div className='thumbnail'>
                <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-rest4.png" alt="Rest" loading="lazy"/>
              </div>
              </Fade>
            </div>


            <div className="NorthCitrus-section-header container">
                <h2>Gather</h2>
              </div>

              <div className='homes container'>
                <Fade left>
                  <div className='thumbnail'>
                    <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-gather1.png" alt="Gather" loading="lazy"/>
                  </div>
              </Fade>

              <Fade top>
                <div className='thumbnail'>
                  <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-gather2.png" alt="Gather" loading="lazy"/>
                </div>
              </Fade>

              <Fade right>
              <div className='thumbnail'>
                <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-gather3.png" alt="Gather" loading="lazy"/>
              </div>
              </Fade>
            </div>        


            
            <div className="NorthCitrus-section-header container">
                <h2>Clean</h2>
              </div>

              <div className='homes container'>
                <Fade left>
                  <div className='thumbnail'>
                    <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-clean1.png" alt="Clean" loading="lazy"/>
                  </div>
              </Fade>

              <Fade top>
                <div className='thumbnail'>
                  <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-clean2.png" alt="Clean" loading="lazy"/>
                </div>
              </Fade>

              <Fade right>
              <div className='thumbnail'>
                <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/venice-clean3.png" alt="Clean" loading="lazy"/>
              </div>
              </Fade>
            </div>  




<div className="NorthCitrus-section-header container">
            <h1>TALK TO SOMEONE AT OUR VENICE HOME TODAY!</h1>
            <p>Our Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />

    </>
  )
}

export default VeniceSection
