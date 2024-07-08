// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";

// MAIN
//-------------------------------------------------------------------------------------------------------
function BackNextCentered({ handleBackClick, handleNextClick }) {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center my-3">
        <button
          onClick={handleBackClick}
          className="btn btn-secondary btn-lg mx-2 px-5"
          id="back-assessment-button"
        >
          Back
        </button>
        <button
          onClick={handleNextClick}
          className="btn btn-secondary btn-lg mx-2 px-5"
          id="start-assessment-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Export
export default BackNextCentered;
