import React from "react";
import "../styles/Home.css";

function Hero() {
  return (
    <div className="hero-div container-fluid" id="hero-div">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-white text-center m-auto">
          <h1>Find your next class without the guesswork.</h1>
          <p className="fw-light">
            Get tailored recommendations for major requirements, distros, and
            any other classes.
          </p>
          <a href="./form-start.html" className="btn btn-outline-light btn-lg">
            Get Started
          </a>
        </div>
        <div className="col-12 col-md-6 fw-light text-center">
          <img
            src="src/assets/HeroCard.png"
            className="hero-img align-self-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
