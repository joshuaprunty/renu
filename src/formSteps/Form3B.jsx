import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// Challenge Level

function Form3B({ currDiff, updateFormData, nextStep, backStep }) {
  const diffs = ["1 (Easy A)", "2", "3 (Average)", "4", "5 (Most Challenging)"];
  const [selectedDiff, setSelectedDiff] = useState(diffs.indexOf(currDiff));
  function handleDiffClick(diffIndex) {
    setSelectedDiff(diffIndex);
  }

  const handleNextClick = () => {
    if (selectedDiff != null) {
      updateFormData({ diff: diffs[selectedDiff - 1] });
      nextStep();
    } else {
      console.log("Please select a difficulty to proceed.");
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  return (
    <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
      <div className="form-div-main bg-white h-100">
        <img
          className="form-background-img"
          src="src/assets/NorthwesternN.png"
        />
        <div className="formq-content d-grid gap-2 position-relative z-2">
          <h2>How challenging of a course are you looking for?</h2>
          {diffs.map((diff, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleDiffClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedDiff === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-5 fs-5">{diff}</span>
            </button>
          ))}
          <span>
            <button
              onClick={handleBackClick}
              className="btn btn-secondary btn-lg"
              id="back-assessment-button"
            >
              Back
            </button>
            <button
              onClick={handleNextClick}
              className="btn btn-secondary btn-lg"
              id="start-assessment-button"
            >
              Next
            </button>
          </span>
        </div>
      </div>
      <div className="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
        <div className="p-b-left h-100"></div>
        <div className="p-b-right h-100"></div>
      </div>
    </div>
  );
}

export default Form3B;
