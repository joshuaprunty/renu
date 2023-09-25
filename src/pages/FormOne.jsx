import React from "react";
import "../styles/Home.css";

function FormOne() {
  return (
    <>
      <div class="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div class="form-div-main bg-white h-100">
          <img id="form-background-img" src="./assets/NorthwesternN.png" />
          <div class="form-content d-grid gap-2 position-relative z-2">
            <h1>Basic Info</h1>
            <p>
              This section will ask you basic info about your academic status at
              Northwestern to help determine courses that fit you.
            </p>
            <a href="./form-q-year.html" class="btn btn-secondary btn-lg">
              Next
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

export default FormOne;
