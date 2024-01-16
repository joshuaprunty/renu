import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// Select Majors and Minors

function Form2C({
  currMajors,
  currMinors,
  updateFormData,
  nextStep,
  backStep,
}) {
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
  const [selectedMajors, setSelectedMajors] = useState(
    currMajors.map((major) => exampleOptions.indexOf(major))
  );
  const [selectedMinors, setSelectedMinors] = useState(
    currMinors.map((minor) => exampleOptions.indexOf(minor))
  );

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

      // Single update call with all the changes
      updateFormData(updates);
      nextStep();
    } else {
      console.log("Please select at least one major or minor to proceed.");
    }
  };

  const handleBackClick = () => {
    backStep();
  };

  // const handleSelectMajor = (event) => {
  //   if (!selectedMajors.includes(event.target.value)) {
  //     setSelectedMajors([...selectedMajors, event.target.value]);
  //   }
  // };

  // const handleRemoveMajor = (major) => {
  //   setSelectedMajors(selectedMajors.filter((m) => m !== major));
  // };

  // const handleSelectMinor = (event) => {
  //   if (!selectedMinors.includes(event.target.value)) {
  //     setSelectedMinors([...selectedMinors, event.target.value]);
  //   }
  // };

  // const handleRemoveMinor = (minor) => {
  //   setSelectedMinors(selectedMinors.filter((m) => m !== minor));
  // };

  const handleSelectMajor = (event) => {
    const index = exampleOptions.indexOf(event.target.value);
    if (index >= 0 && !selectedMajors.includes(index)) {
      setSelectedMajors([...selectedMajors, index]);
    }
  };

  const handleRemoveMajor = (index) => {
    setSelectedMajors(selectedMajors.filter((i) => i !== index));
  };

  const handleSelectMinor = (event) => {
    const index = exampleOptions.indexOf(event.target.value);
    if (index >= 0 && !selectedMinors.includes(index)) {
      setSelectedMinors([...selectedMinors, index]);
    }
  };

  const handleRemoveMinor = (index) => {
    setSelectedMinors(selectedMinors.filter((i) => i !== index));
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
                  {exampleOptions[major]}{" "}
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
                  {exampleOptions[minor]}{" "}
                  <button onClick={() => handleRemoveMinor(minor)}>X</button>
                </div>
              ))}
            </div>
          </div>

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

export default Form2C;
