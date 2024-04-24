import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Talk to a member of our Addiction and Recovery Support team. </p>
            </Fade>
            <Fade left>
                  <h2> +1 (714) 766-3251 </h2>
            </Fade>

            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact