// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form1B({ nextStep, backStep }) {
  // Function Declarations ----------------------------------------------
  const handleNextClick = () => {
    nextStep();
  };

  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <>
      <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div className="form-div-main bg-white h-100">
          <img id="form-background-img" src="src/assets/NorthwesternN.png" />
          <div className="form-content d-grid gap-2 position-relative z-2">
            <h1 className="text-center">Basic Info</h1>
            <p className="text-center px-5">
              This section will ask you basic info about your academic status at
              Northwestern to help determine courses that fit you.
            </p>
            <BackNext
              handleBackClick={handleBackClick}
              handleNextClick={handleNextClick}
            />
          </div>
        </div>
        <div className="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
          <div className="p-b-left h-100"></div>
          <div className="p-b-right h-100"></div>
        </div>
      </div>
    </>
  );
}

// Export
export default Form1B;
