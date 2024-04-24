import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer'>
            <div className="footer-container container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} width="150px" height="60px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="footer-col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/treatment'><p>Sober Living</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/contact'><p>Contact</p></Link>
                        </LinkRoll>
                    </div>

                    <div className="footer-col">
                        <h3>Locations</h3>
                        <p>Orange County</p>
                        <p>Ventura County</p>
                        <p>San Diego County</p>
                    </div>


                    <div className="footer-col">
                        <h3>Corporate office</h3>
                        <p>1800 Vine Street, Los Angeles CA 90028</p>
                    </div>

                </div>
                <p className='copyright'><p>&copy; 2023 55 SILVER. ALL RIGHTS RESERVED.</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
