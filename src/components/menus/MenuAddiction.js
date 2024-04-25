import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import "./MenuAddiction.css";



const MenuAddiction = () => {
  return (
    <>
<div className="menu-addiction">
  <div className="menu-addiction-content container">

      <div className="menu-addiction-header">
        <h1>
          WE OFFER VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At [ CLINIC NAME ], clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>




      {/* Mental Health Thumbnails */}

      <div className="menu-addiction-flex">

      
{/* ALCOHOL */}
        <div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Alcoholism"
              loading="lazy"/>
          <h1>Alcohol Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/alcohol">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>




{/* COCAINE */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Cocaine"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/cocaine">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* FENTANYL */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Fentanyl"
              loading="lazy"/>
          <h1>Fentanyl Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/fentanyl">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* HEROIN */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="Heroin"
              loading="lazy"/>
          <h1>Heroin Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* KRATOM */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Kratom"
              loading="lazy"/>
          <h1>Kratom Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/kratom">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* MDMA */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
              alt="MDMA"
              loading="lazy"/>
          <h1>MDMA Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/mdma">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* METH */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
              alt="Meth"
              loading="lazy"/>
          <h1>Meth Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/meth">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OPIATE */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="Cocaine"
              loading="lazy"/>
          <h1>Opiate Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opiate">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OPIOID */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="Opioid"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/opioid">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* OXYCODONE */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Oxycodone"
              loading="lazy"/>
          <h1>Oxycodone Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/oxycodone">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* PRESCRIPTIONS */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg"
              alt="Prescriptions"
              loading="lazy"/>
          <h1>Prescriptions Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/prescriptions">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>


{/* ZANAX */}
<div className="menu-addiction-flexItem">
          <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Xanax"
              loading="lazy"/>
          <h1>Cocaine Addiction</h1>
        <div>

        <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>
      </div>
</div>
</div>

    </>
  );
};

export default MenuAddiction;
