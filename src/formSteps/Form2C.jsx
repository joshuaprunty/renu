// IMPORTS
//-------------------------------------------------------------------------------------------------------import React, { useState } from "react";
import { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";
import React from "react";
import Select from "react-select";
import majors from "../data/majors.json";

// FORM STEP
//-------------------------------------------------------------------------------------------------------
function Form2C({
  currSchool,
  currMajors,
  updateFormData,
  nextStep,
  backStep,
}) {
  const fullSchools = {
    Weinberg: "Weinberg College of Arts and Sciences",
    McCormick: "McCormick School of Engineering",
    Medill: "Medill School of Journalism",
    Bienen: "Bienen School of Music",
    Communications: "School of Communications",
    SESP: "School of Education and Social Policy",
  };

  console.log(currSchool);
  const schoolMajors = majors[currSchool];
  console.log(schoolMajors);
  const exampleOptions = schoolMajors.map((major) => ({
    value: major,
    label: major,
  }));

  // UseState Variables -------------------------------------------------
  const [selectedMajors, setSelectedMajors] = useState(
    currMajors.map((major) => exampleOptions.indexOf(major))
  );

  const [errorState, setErrorState] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  // Function Declarations ---------------------------------------------
  // Next
  const handleNextClick = () => {
    if (selectedMajors.length > 0) {
      const updates = {
        majors: selectedMajors,
      };
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
  const handleSelectMajor = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    if (value && !selectedMajors.includes(value)) {
      setSelectedMajors([...selectedMajors, value]);
    }
    setSelectValue(null);
  };

  // Major Remove
  const handleRemoveMajor = (valueToRemove) => {
    setSelectedMajors(
      selectedMajors.filter((value) => value !== valueToRemove)
    );
  };

  // Return Statement ---------------------------------------------------
  return (
    <div className="form-div-major">
      <div className="form-content d-grid gap-2 z-2">
        <h2>Add your current/intended majors.</h2>
        <h5>Majors for {fullSchools[currSchool]} </h5>
        <Select
          id="majors-dropdown"
          options={exampleOptions}
          onChange={handleSelectMajor}
          className="my-3"
          isClearable={true}
          value={selectValue}
        />
        <div className="selected-items">
          {selectedMajors.map((majorValue, index) => {
            const majorLabel =
              exampleOptions.find((option) => option.value === majorValue)
                ?.label || majorValue;
            return (
              <div key={index} className="selected-item">
                {majorLabel}{" "}
                <button
                  className="btn btn-close btn-sm"
                  onClick={() => handleRemoveMajor(majorValue)}
                ></button>
              </div>
            );
          })}
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
  );
}

// Export
export default Form2C;
