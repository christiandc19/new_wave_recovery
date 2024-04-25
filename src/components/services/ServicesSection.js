import React from 'react'
import Fade from 'react-reveal/Fade';
import './ServicesSection.css'

import { BsCheckLg } from "react-icons/bs";
import servicesSection1 from '../../assets/servicesSection1-min.webp'

const ServicesSection = () => {
    return (
        <>








<div className='sectionbg'>


<div className="servicesSection ">
        <div className="servicesSection-content container">

        <div className="servicesSection-left">
            <img src={servicesSection1} loading="lazy" alt="hiking trail" />
          </div>


          <div className="servicesSection-right">
            <Fade left>
            <h1>OUR SERVICES</h1>
            </Fade>

            <Fade right>
            <h2>"Get your life back on the right path."</h2>
            </Fade>

            <Fade left>
            <p>
            A balanced approach to recovery through community & action. We offer amazing amenities at our sober living including, but not limited to:
            </p>
            </Fade>

            <br /> <br />


            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Comfortable Bedrooms: </b>Well-appointed, clean, and comfortable bedrooms to provide a peaceful and restful environment.</p>
              </div>
            </Fade>
            </div>


            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Communal Living Spaces: </b>Inviting and spacious common areas where residents can socialize, relax, and engage in group activities.</p>
              </div>
            </Fade>
            </div>


            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Communal Living Spaces: </b>Inviting and spacious common areas where residents can socialize, relax, and engage in group activities.</p>
              </div>
            </Fade>
            </div>


            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Fully Equipped Kitchen: </b>A well-stocked kitchen with modern appliances where residents can prepare their own meals and learn essential cooking skills.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Employment Assistance: </b>Support in job searching, resume building, interview preparation, and connecting with potential employers.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Transportation Assistance: </b> Information and resources regarding local public transportation options, or assistance in organizing transportation for appointments and activities.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Nutrition Guidance: </b> Access to nutrition resources and guidance to help residents maintain a balanced and healthy diet.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Structured Daily Routine: </b> A structured daily schedule that promotes healthy habits, including designated times for therapy, group activities, meals, and free time.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Access to Support Services: </b> Information and connections to local support services, including healthcare providers, mental health professionals, and addiction specialists.</p>
              </div>
            </Fade>
            </div>

            <div className="checklist">
            <Fade top>
              <div className="servicesSection-icon">
                <BsCheckLg />
              </div>
              <div>
                <p><b>Supportive Community: </b> A community of like-minded individuals on similar recovery journeys, providing a supportive and understanding environment.</p>
              </div>
            </Fade>
            </div>


          </div>
        </div>
      </div>




      </div>







        </>
    )
}

export default ServicesSection
