import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenuPrograms.css";


import Card1 from "../../assets/program_php.webp";
import Card2 from "../../assets/program_iop.webp";
import Card3 from "../../assets/program_op.webp";

const MenusPrograms = () => {
  return (
    <>

    <div className="menu-programs">
      <div className="menu-programs-content container">

          <div className="menu-programs-header container">
            <h1>
              We offer various Substance Abuse Programs
            
            </h1>
            <p>
              Our clients receive individual
              therapy alongside a range of additional treatments, including relapse
              prevention, trauma therapy, mindfulness meditation, transportation,
              yoga, and more. We offer support that clients need to allow them to
              gradually go back to treatment.
            </p>
          </div>




    <div className="menu-programs-flex">

{/* PHP */}

        <div className="menu-programs-flexItem">
            <img src={Card1} alt="Mental Health" loading="lazy" />
          <div>
            <h1>PARTIAL HOSPITALIZATION</h1>
            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/partial-hospitalization-program">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* IOP */}
<div className="menu-programs-flexItem">
            <img src={Card2} alt="Mental Health" loading="lazy" />
          <div>
            <h1>INTENSIVE OUTPATIENT</h1>
            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/intensive-outpatient-program">
                  <button>Learn More</button>
                </Link>
              </LinkRoll>
            </div>
          </div>
        </div>



{/* OP */}
<div className="menu-programs-flexItem">
            <img src={Card3} alt="Mental Health" loading="lazy" />
          <div>
            <h1>OUTPATIENT </h1>
            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/outpatient-program">
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

export default MenusPrograms;
