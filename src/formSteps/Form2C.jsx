// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form2C({
  currMajors,
  currMinors,
  updateFormData,
  nextStep,
  backStep,
}) {
  // Content Variables --------------------------------------------
  const exampleOptions = [
    "Biology",
    "Computer Science",
    "Economics",
    "Journalism",
    "Mathematics",
    "Music",
    "Philosophy",
    "Physics",
    "Political Science",
    "Psychology",
  ];

  // UseState Variables -------------------------------------------------
  const [selectedMajors, setSelectedMajors] = useState(
    currMajors.map((major) => exampleOptions.indexOf(major))
  );

  const [selectedMinors, setSelectedMinors] = useState(
    currMinors.map((minor) => exampleOptions.indexOf(minor))
  );

  const [errorState, setErrorState] = useState(false);

  // Function Declarations ---------------------------------------------
  // Next
  const handleNextClick = () => {
    if (selectedMajors.length > 0 || selectedMinors.length > 0) {
      const updates = {};
      if (selectedMajors.length > 0) {
        const selectedMajorValues = selectedMajors.map(
          (index) => exampleOptions[index]
        );
        updates.majors = selectedMajorValues;
      }
      if (selectedMinors.length > 0) {
        const selectedMinorValues = selectedMinors.map(
          (index) => exampleOptions[index]
        );
        updates.minors = selectedMinorValues;
      }
      updateFormData(updates);
      nextStep();
    } else {
      setErrorState(true);
    }
  };

  // Back
  const handleBackClick = () => {
    backStep();
  };

  // Major Select
  const handleSelectMajor = (event) => {
    const index = exampleOptions.indexOf(event.target.value);
    if (index >= 0 && !selectedMajors.includes(index)) {
      setSelectedMajors([...selectedMajors, index]);
    }
  };

  // Major Remove
  const handleRemoveMajor = (index) => {
    setSelectedMajors(selectedMajors.filter((i) => i !== index));
  };

  // Minor Select
  const handleSelectMinor = (event) => {
    const index = exampleOptions.indexOf(event.target.value);
    if (index >= 0 && !selectedMinors.includes(index)) {
      setSelectedMinors([...selectedMinors, index]);
    }
  };

  // Minor Remove
  const handleRemoveMinor = (index) => {
    setSelectedMinors(selectedMinors.filter((i) => i !== index));
  };

  // Return Statement ---------------------------------------------------
  return (
    <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
      <div className="form-div-main bg-white h-100">
        <img
          className="form-background-img"
          src="src/assets/NorthwesternN.png"
        />
        <div className="formq-content d-grid gap-2 position-relative z-2">
          <h2>
            Add your current/intended majors, minors, and certificate programs
          </h2>

          <div className="form-group">
            <label htmlFor="majors-dropdown">Majors</label>
            <select
              id="majors-dropdown"
              className="form-control"
              onChange={handleSelectMajor}
            >
              {exampleOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="selected-items">
              {selectedMajors.map((major, index) => (
                <div key={index} className="selected-item">
                  {exampleOptions[major]}{" "}
                  <button
                    className="btn btn-close btn-sm"
                    onClick={() => handleRemoveMajor(major)}
                  ></button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="minors-dropdown">Minors</label>
            <select
              id="minors-dropdown"
              className="form-control"
              onChange={handleSelectMinor}
            >
              {exampleOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="selected-items">
              {selectedMinors.map((minor, index) => (
                <div key={index} className="selected-item">
                  {exampleOptions[minor]}{" "}
                  <button
                    className="btn btn-close btn-sm"
                    onClick={() => handleRemoveMinor(minor)}
                  ></button>
                </div>
              ))}
            </div>
          </div>

          <BackNext
            handleBackClick={handleBackClick}
            handleNextClick={handleNextClick}
          />
          {errorState && (
            <p className="position-absolute errormsg">
              Please select at least one major to proceed.
            </p>
          )}
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
export default Form2C;
