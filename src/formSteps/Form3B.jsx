import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// Challenge Level

function Form3B({ nextStep }) {
  const [selectedDiff, setSelectedDiff] = useState(null);
  const diffs = ["1 (Easy A)", "2", "3 (Average)", "4", "5 (Most Challenging)"];

  function handleDiffClick(diffIndex) {
    setSelectedDiff(diffIndex);
  }

  const handleStartClick = () => {
    nextStep();
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
          <button
            onClick={handleStartClick}
            className="btn btn-secondary btn-lg"
            id="start-assessment-button"
          >
            Next
          </button>
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
