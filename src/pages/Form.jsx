import React from "react";
import "../styles/Home.css";

function Form() {
  return (
    <>
      <div class="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div class="form-div-main bg-white h-100">
          <img id="form-background-img" src="./assets/NorthwesternN.png" />
          <div class="form-content d-grid gap-2 position-relative z-2">
            <h1>Find your next course in under 10 minutes.</h1>
            <p>
              Tell us about what you're looking for in upcoming classes, which
              requirements you’d like to fulfill, and previous courses you’ve
              taken.
            </p>
            <a
              href="./form-section-basic.html"
              class="btn btn-secondary btn-lg "
              id="start-assessment-button"
            >
              Start Assessment
            </a>
          </div>
        </div>
        <div class="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
          <div class="p-b-left h-100"></div>
          <div class="p-b-right h-100"></div>
        </div>
      </div>
    </>
  );
}

export default Form;
