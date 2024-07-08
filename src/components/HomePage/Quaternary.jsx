// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "/src/styles/Home.css";
import "/src/styles/debug.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Quaternary() {
  return (
    <div class="quaternary-div" id="quaternary-div">
      <div class="container-lg d-flex flex-direction-col justify-content-center">
        <img class="quat-background-img" src="src/assets/NorthwesternN.png" />
        <div class="position-relative z-2 w-100">
          <div class="row h-100 align-content-center">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 justify-content-center text-center ms-auto">
              <h2 class="text-white text-center myfw2 mb-4">
                Find your next class now
              </h2>
              <a href="./form" class="btn btn-light btn-lg">
                Get Started
              </a>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export
export default Quaternary;
