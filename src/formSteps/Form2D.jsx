import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// What Reqs to Fulfill

function Form2D({ nextStep }) {
  const [selectedFulfills, setSelectedFulfills] = useState([]);
  const fulfills = [
    "Foundational Discipline (Distro)",
    "Major/Minor Requirement",
    "Certificate Requirement",
    "Seminar",
    "Language Requirement",
    "Other",
  ];

  function handleFulfillsClick(fulfillsIndex) {
    if (selectedFulfills.includes(fulfillsIndex)) {
      // If already selected, remove it from the array
      setSelectedFulfills(
        selectedFulfills.filter((index) => index !== fulfillsIndex)
      );
    } else {
      // If not selected, add it to the array
      setSelectedFulfills([...selectedFulfills, fulfillsIndex]);
    }
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
          <h2>What requirement(s) are you looking to fulfill?</h2>
          {fulfills.map((fulfill, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleFulfillsClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedFulfills.includes(index + 1)
                    ? "check-square-selected"
                    : ""
                }`}
              ></div>
              <span className="form-option-text ms-5 fs-5">{fulfill}</span>
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

export default Form2D;
