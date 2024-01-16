import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/Form.css";
import BackNext from "../components/Form/BackNext";

// Meeting Time

function Form3E({ currTime, updateFormData, nextStep, backStep }) {
  const times = ["Morning", "Afternoon", "Evening", "No Preference"];
  const [selectedTime, setSelectedTime] = useState(times.indexOf(currTime));
  function handleTimeClick(timeIndex) {
    setSelectedTime(timeIndex);
  }

  const handleNextClick = () => {
    if (selectedTime != null) {
      updateFormData({ time: times[selectedTime - 1] });
      nextStep();
    } else {
      console.log("Please select a time slot to proceed.");
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
          <h2>I am looking for a course that meets in the:</h2>
          {times.map((time, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary d-flex align-items-center py-3"
              onClick={() => handleTimeClick(index + 1)}
            >
              <div
                className={`check-square ms-4 ${
                  selectedTime === index + 1 ? "check-square-selected" : ""
                }`}
              ></div>
              <span className="form-option-text ms-3 text-start fs-5">
                {time}
              </span>
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

export default Form3E;
