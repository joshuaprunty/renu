// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "/src/styles/Home.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Ternary() {
  return (
    <div class="ternary-div" id="ternary-div">
      <div class="container-lg py-5 px-6">
        <p class="second-header text-center">Built for every student</p>
        <hr class="secondary-hr" />
        <div class="row mt-4 px-4 text-center">
          <div class="col-lg-9 g-0 g-md-3">
            <div class="ternary-card w-100">
              <img class="tc-img" src="src/assets/WCWelcome.png" />
              <div class="tc-text">
                <p class="tc-head">Incoming First-Years</p>
                <p class="tc-body">
                  Get a head-start on class selections for your first quarter at
                  Northwestern.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
          <div class="col-lg-3"></div>
          <div class="col-lg-9 g-0 g-md-3">
            <div class="ternary-card w-100">
              <div class="tc-text">
                <p class="tc-head">Current Undergrads</p>
                <p class="tc-body">
                  Find the best courses for you based on your favorite (and
                  least favorite) past classes.
                </p>
              </div>
              <img class="tc-img" src="src/assets/Undergrads.png" />
            </div>
          </div>
          <div class="col-lg-9 g-0 g-md-3">
            <div class="ternary-card w-100">
              <img class="tc-img" src="src/assets/Kellogg.png" />
              <div class="tc-text">
                <p class="tc-head">Graduate Students</p>
                <p class="tc-body">
                  Continue on your journey with specialized recommendations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

// Export
export default Ternary;
