import React from "react";
import "../styles/Home.css";
import "../styles/Form.css";

<<<<<<< HEAD
// Initial Screen

=======
>>>>>>> 355797369da7e5d5912770d9434613ebc2a51636
function Form1A({ nextStep }) {
  const handleStartClick = () => {
    nextStep();
  };

  return (
    <>
      <div className="container-fluid position-fixed vh-100 mt-5 mb-0">
        <div className="form-div-main bg-white h-100">
          <img
            className="form-background-img"
            src="src/assets/NorthwesternN.png"
          />
          <div className="form-content d-grid gap-2 position-relative z-2">
            <h1>Find your next course in under 10 minutes.</h1>
            <p>
              Tell us about what you're looking for in upcoming classes, which
              requirements you’d like to fulfill, and previous courses you’ve
              taken.
            </p>
            <button
              onClick={handleStartClick}
              className="btn btn-secondary btn-lg"
              id="start-assessment-button"
            >
              Start Assessment
            </button>
          </div>
        </div>
        <div className="form-progress-bar h-100 pt-2 px-4 text-center text-white mb-0">
          <div className="p-b-left h-100"></div>
          <div className="p-b-right h-100"></div>
        </div>
      </div>
    </>
  );
}

export default Form1A;
