import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import { BsCheckLg } from "react-icons/bs";
import WhatWeDoImg1 from '../../assets/whatwedo1.webp'




const Whoweare = () => {
  return (
<>
<div className='sectionbg'>
<div className="homeSection2 ">
        <div className="homeSection2-content container">
          <div className="homeSection2-left">
            <Fade left>
            <h1>WHY CHOOSE 55 SILVER</h1>
            </Fade>

            <Fade right>
            <h2>"We're here to help you find a path forward."</h2>
            </Fade>

            <Fade left>
            <p>
            Build a new life at one of our sober living homes across Los Angeles, providing support and a community of healing behind you, every step of the way. <br/> <br/>Transitioning back into society is difficult in many situations that's why we offer an opportunity of a new beginning to the world of sobriety.
            </p>
            </Fade>

            <br /> <br />



            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                <b>Prime Location: </b>Situated in Los Angeles, our residents have access to a wide range of opportunities for personal growth, employment, education, and recreation.
                </p>
              </div>
            </Fade>
            </div>
            <br />


            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                <b>Professional Guidance: </b>Our team assists in resume building, job search strategies, and interview preparation to support residents in their pursuit of meaningful employment.
                </p>
              </div>
            </Fade>
            </div>
            <br />



            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                <b>Personalized Support: </b>Every resident is unique. Our experienced team tailors support to individual needs, providing resources for relapse prevention, life skills, and vocational development.
                </p>
              </div>
            </Fade>
            </div>
            <br />



            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Support Team: </b>
                Skilled, professional, and friendly staff with years of experience mentoring and working in the recovery field
                </p>
              </div>
            </Fade>
            </div>
            <br />



            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Drug Free Environment: </b>A supportive, professional drug and alcohol free environment</p>
              </div>
              </Fade>

            </div>
            <br />
            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                <b>Employment Assistance:: </b>Support in job searching, resume building, interview preparation, and connecting with potential employers.
                </p>
              </div>
              </Fade>
            </div>
          </div>

          <div className="homeSection2-right">
            <img src={WhatWeDoImg1} loading="lazy" alt="psychologist" />
          </div>
        </div>
      </div>
      </div>
</>
  )
}

export default Whoweare