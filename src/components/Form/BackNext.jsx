// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";

// MAIN
//-------------------------------------------------------------------------------------------------------
function BackNext({ handleBackClick, handleNextClick }) {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-12 col-md-4 d-flex justify-content-center my-1 order-2 order-md-1">
        <button
          onClick={handleBackClick}
          className="btn btn-secondary btn-lg px-5 mx-auto"
          id="back-assessment-button"
        >
          Back
        </button>
      </div>
      <div className="col-12 col-md-4 d-flex justify-content-center my-1 order-1 order-md-2">
        <button
          onClick={handleNextClick}
          className="btn btn-secondary btn-lg mx-auto px-5"
          id="start-assessment-button"
        >
          Next
        </button>
      </div>
      <div className="col-2 order-3"></div>
    </div>
  );
}

// Export
export default BackNext;
