import React from "react";
import "../styles/Home.css";

function Quaternary() {
  return (
    <div class="quaternary-div container-fluid" id="quaternary-div">
      <img class="quat-background-img" src="src/assets/NorthwesternN.png" />
      <div class="position-relative z-2 w-100">
        <div class="row h-100 align-content-center">
          <div class="col-sm-2"></div>
          <div class="col-sm-8 justify-content-center text-center ms-auto">
            <h2 class="text-white text-center mb-4">
              Find your next class now
            </h2>
            <a href="./form-start.html" class="btn btn-light btn-lg">
              Get Started
            </a>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Quaternary;
