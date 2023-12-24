import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// Select Year

function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  const years = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
    "Sixth Year",
  ];
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);

  function handleYearClick(yearIndex) {
    setSelectedYear(yearIndex);
  }

  const handleNextClick = () => {
    if (selectedYear != null) {
      updateFormData({ year: years[selectedYear - 1] });
      nextStep();
    } else {
      console.log("Please select a year to proceed.");
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
          <h2>Your class at NU (Current or Incoming):</h2>
          {years.map((year, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleYearClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedYear === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-5 fs-5">{year}</span>
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

export default Form2A;
