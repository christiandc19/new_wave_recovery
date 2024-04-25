import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import InsuranceLogos from './InsuranceLogos'

import Aetna from '../../assets/aetna.webp'
import Beacon from '../../assets/beacon.webp'
import Bluecross from '../../assets/bluecross.webp'
import Cigna from '../../assets/cigna.webp'
import Horizon from '../../assets/horizon.webp'
import Anthem from '../../assets/anthem.webp'

import Family from "../../assets/insurance-section.webp"


const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className='insurance-section-content'>
 
                <div className="insurance-section-header container">
                    <div>
                        <h1>WE WORK WITH MAJOR INSURANCE GROUPS</h1>
                        <p>With our extensive network of accepted insurance plans, you can have peace of mind knowing that you're covered. Whether you're in need of routine check-ups, specialized treatments, or emergency care, our network includes some of the most reputable insurance providers in the industry. This means you can focus on what matters most - your health - without the added worry of financial strain.</p>

                    </div>
                </div>

                <div className='insurance-section-flex container'>

                    <div className='insurance-section-left'>
                        <h1>Our Trusted Network of Insurance Accepted Providers</h1>
                        <p>We understand the importance of accessible healthcare. That's why we have partnered with a wide range of insurance providers to ensure that our services are available to as many individuals and families as possible. Our commitment to your well-being goes beyond just medical care; it extends to making the process of seeking treatment as seamless and stress-free as possible.</p><br/>






                        <div className="insurance-section-thumbnails container">

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Aetna}/>
    </div>
</Fade>

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Beacon}/>
    </div>
</Fade>

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Bluecross}/>
    </div>
</Fade>

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Cigna}/>
    </div>
</Fade>

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Horizon}/>
    </div>
</Fade>

<Fade bottom>
    <div className='insurance-thumbnail'>
    <InsuranceLogos Image={Anthem}/>
    </div>
</Fade>
</div>


<div className="insurance-section-header">
                <div>
                    <p><i>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</i></p>
                </div>
            </div>







                    </div>

                    <div className='insurance-section-right'>
                        <img src={Family} alt="Family" loading="lazy" />
                    </div>

                </div>

            </div>






            </div>


        </>
    )
}

export default InsuranceSection
