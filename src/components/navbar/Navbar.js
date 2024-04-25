import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-bl2.png'
import {AiOutlineCaretDown } from "react-icons/ai";
import Topbar from '../../components/topbar/Topbar'


import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }



    return (
        <>
            <Topbar />

        <div className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="New Wave Recovery Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >ADDICTION <AiOutlineCaretDown />
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol Addiction </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/cocaine`}> Cocaine Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl Addiction </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/heroin`}> Heroin Addiction </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/kratom`}> Kratom Addiction </NavLink> </li>
                        </ul>
                    </li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >MENTAL HEALTH <AiOutlineCaretDown />
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> ACUTE STRESS DISORDER </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/adhd`}> ADHD</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anger-disorder`}> ANGER DISORDER </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anxiety`}> ANXIETY DISORDER </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/bipolar-disorder`}> BIPOLAR DISORDER </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/depression`}> DEPRESSION </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/panic-disorder`}> PANIC DISORDER </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/ptsd`}> PTSD </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/schizophrenia`}> SCHIZOAFFECTIVE DISORDER </NavLink> </li>
                        </ul>
                    </li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >DETOX PROGRAMS <AiOutlineCaretDown />
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-heroin`}> Heroin Detox </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-alcohol`}> Alcohol Detox</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/detox-cocaine`}> Cocaine Detox </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/detox-adderall`}> Adderall Detox </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-benzodiazepines`}> Benzodiazepines </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-methamphetamine`}> Methamphetamine </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-marijuana`}> Marijuana Detox </NavLink> </li>
                        </ul>
                    </li>

                     <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >Substance Abuse <AiOutlineCaretDown />
                        <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/partial-hospitalization-program`}> PARTIAL HOSPITALIZATION PROGRAM </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/intensive-outpatient-program`}> INTENSIVE OUTPATIENT PROGRAM</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/outpatient-program`}> OUTPATIENT PROGRAM </NavLink> </li>
                        </ul>
                    </li>
 
                    <li><Link to='/huntington-beach'>SOBER LIVING</Link> </li>

                    <li><Link to='/about'>ABOUT US</Link> </li>

                    {/* <li><Link to='/career'>Career</Link></li> */}

                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>

                {/* <div className='hide'>
                <p><a href="tel:3236433171"> CONTACT US <span> <AiOutlinePhone /></span></a></p>
                </div> */}


            </div>
        </div>
        </>
    )
}

export default Navbar
