import React from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// Preferences Section Init

function Form3A({ nextStep }) {
  const handleStartClick = () => {
    nextStep();
  };

  return (
    <>
      <div class="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div class="form-div-main bg-white h-100">
          <img id="form-background-img" src="src/assets/NorthwesternN.png" />
          <div class="form-content d-grid gap-2 position-relative z-2">
            <h1>Preference Questions</h1>
            <p>
              This section will ask you to specify preferences about specific
              class attributes
            </p>
            <button
              onClick={handleStartClick}
              className="btn btn-secondary btn-lg"
              id="start-assessment-button"
            >
              Next
            </button>
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

export default Form3A;
