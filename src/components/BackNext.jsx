import React from "react";

function BackNext({ handleBackClick, handleNextClick }) {
  return (
    <span className="mt-3">
      <button
        onClick={handleBackClick}
        className="btn btn-secondary btn-lg"
        id="back-assessment-button"
      >
        Back
      </button>
      <button
        onClick={handleNextClick}
        className="btn btn-secondary btn-lg ms-3"
        id="start-assessment-button"
      >
        Next
      </button>
    </span>
  );
}

export default BackNext;
