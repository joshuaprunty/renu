import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";

// Select Majors and Minors

function Form2C({ nextStep }) {
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [selectedMinors, setSelectedMinors] = useState([]);
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

  const handleStartClick = () => {
    nextStep();
  };

  const handleSelectMajor = (event) => {
    if (!selectedMajors.includes(event.target.value)) {
      setSelectedMajors([...selectedMajors, event.target.value]);
    }
  };

  const handleRemoveMajor = (major) => {
    setSelectedMajors(selectedMajors.filter((m) => m !== major));
  };

  const handleSelectMinor = (event) => {
    if (!selectedMinors.includes(event.target.value)) {
      setSelectedMinors([...selectedMinors, event.target.value]);
    }
  };

  const handleRemoveMinor = (minor) => {
    setSelectedMinors(selectedMinors.filter((m) => m !== minor));
  };

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
                  {major}{" "}
                  <button onClick={() => handleRemoveMajor(major)}>X</button>
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
                  {minor}{" "}
                  <button onClick={() => handleRemoveMinor(minor)}>X</button>
                </div>
              ))}
            </div>
          </div>

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

export default Form2C;
