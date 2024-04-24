import React from 'react'
import './Whatwedo.css'
import Fade from 'react-reveal/Fade';

import Therapy from '../../assets/therapy.jpg'
import Staff from '../../assets/staff.jpg'
import Clinic from '../../assets/clinic.jpg'



const Whatwedo = () => {
    return (
        <>
        <div className='Whatwedo container'>
        <h1>What We Can Provide</h1>
        <p>We strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.</p>
            <div>
                <div className="content">
                            <div className='flex-right'>

                    <Fade top>
                    <div className='thumbnail'>
                        <img src={ Therapy } width="300" height="250" alt="Therapy Session" loading="lazy"/>
                        <div>                   
                        <p>Therapy and support groups for either addiction or mental health disorders</p>
                        </div>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Staff } width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p>Compassionate staff that is dedicated to your success</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src={ Clinic } width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p>Evidence-based practices that give you the best chance of recovery</p>
                    </div>
                    </Fade>

                       

                    </div>
                </div>
            </div>
        </div>
</>
    )
}

export default Whatwedo
