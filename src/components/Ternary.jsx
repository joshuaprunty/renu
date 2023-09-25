import React from "react";
import "../styles/Home.css";

function Ternary() {
  return (
    <div class="ternary-div container-fluid py-5" id="ternary-div">
      <p class="fs-1 text-white text-center">Built for every student</p>
      <div class="row mt-4 text-center justify-content-center">
        <div class="col-lg-6 g-0 g-md-3">
          <div class="ternary-card">
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
        <div class="col-lg-6 g-0 g-md-3">
          <div class="ternary-card">
            <img class="tc-img" src="src/assets/Undergrads.png" />
            <div class="tc-text">
              <p class="tc-head">Current Undergrads</p>
              <p class="tc-body">
                Find the best courses for you based on your favorite (and least
                favorite) past classes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 g-0 g-md-3">
          <div class="ternary-card">
            <img class="tc-img" src="src/assets/Kellogg.png" />
            <div class="tc-text">
              <p class="tc-head">Graduate Students</p>
              <p class="tc-body">
                Continue on your journey with specialized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ternary;
