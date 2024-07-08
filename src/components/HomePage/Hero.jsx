// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "/src/styles/Home.css";
import "/src/styles/debug.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Hero() {
  return (
    <>
      <div className="hero-top-spacer w-100 bg-dark"></div>
      <div className="hero-div" id="hero-div">
        <div className="debug hero-div container-lg" id="hero-div">
          <div className="row align-items-center">
            <div className="debug col-12 col-md-7 text-white text-center m-auto">
              <h1 className='hero-header mb-4'>Find your next class without the guesswork.</h1>
              <p className="fw-light fs-3 mb-4">
                Get tailored recommendations for major requirements, distros, and
                any other classes.
              </p>
              <a href="./form" className="btn btn-outline-light btn-lg">
                Get Started
              </a>
            </div>
            <div className="debug col-12 col-md-5 fw-light text-center">
              <img
                src="src/assets/HeroCard.png"
                className="hero-img align-self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Export
export default Hero;
