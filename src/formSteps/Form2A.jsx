// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import BackNext from "../components/Form/BackNext";
import "../styles/Form.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Form2A({ currYear, updateFormData, nextStep, backStep }) {
  // Content Variables --------------------------------------------
  const years = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
    "Sixth Year",
  ];

  // UseState Variables -------------------------------------------------
  const [selectedYear, setSelectedYear] = useState(years.indexOf(currYear) + 1);

  // Function Declarations ----------------------------------------------
  const handleYearClick = (yearIndex) => {
    setSelectedYear(yearIndex);
  };

  // Next
  const handleNextClick = () => {
    if (selectedYear != null) {
      updateFormData({ year: years[selectedYear - 1] });
      nextStep();
    } else {
      console.log("Please select a year to proceed.");
    }
  };

  // Back
  const handleBackClick = () => {
    backStep();
  };

  // Return Statement ---------------------------------------------------
  return (
    <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
      {" "}
      {/*Container*/}
      <div className="form-div-main bg-white h-100">
        {" "}
        {/*Form Div*/}
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
              <span className="form-option-text ms-lg-5 ms-3 fs-5">{year}</span>
            </button>
          ))}
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
  );
}

// Export
export default Form2A;
