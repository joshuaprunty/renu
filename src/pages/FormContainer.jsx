import React, { useState } from "react";
import Form1A from "../formSteps/Form1A";
import Form1B from "../formSteps/Form1B";
import Form2A from "../formSteps/Form2A";
import Form2B from "../formSteps/Form2B";
import Form2C from "../formSteps/Form2C";
import Form2D from "../formSteps/Form2D";
import Form3A from "../formSteps/Form3A";
import Form3B from "../formSteps/Form3B";
import Form3C from "../formSteps/Form3C";
import Form3D from "../formSteps/Form3D";
import Form3E from "../formSteps/Form3E";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    year: null,
    school: null,
    majors: [],
    minors: [],
    fulfills: [],
    diff: null,
    loc: null,
    day: null,
    time: null,
  });

  // Function to move to the next step
  const nextStep = () => setCurrentStep(currentStep + 1);

  const backStep = () => setCurrentStep(currentStep - 1);

  // Function to move to the previous step
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Function to update form data
  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  // Function to render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Form1A nextStep={nextStep} />;
      case 2:
        return <Form1B nextStep={nextStep} backStep={backStep} />;
      case 3:
        return (
          <Form2A
            currYear={formData.year}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 4:
        return (
          <Form2B
            currSchool={formData.school}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 5:
        return (
          <Form2C
            currMajors={formData.majors}
            currMinors={formData.minors}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 6:
        return (
          <Form2D
            currFulfill={formData.fulfills}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 7:
        return (
          <Form3A
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 8:
        return (
          <Form3B
            currDiff={formData.diff}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 9:
        return (
          <Form3C
            currLoc={formData.loc}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 10:
        return (
          <Form3D
            currDay={formData.day}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 11:
        return (
          <Form3E
            currTime={formData.time}
            updateFormData={updateFormData}
            nextStep={nextStep}
            backStep={backStep}
          />
        );
      case 12:
        console.log(formData);
        return <div>Form Completed</div>;

      default:
        return <div>Form Completed</div>;
        console.log(formData);
    }
  };

  return <div>{renderStep()}</div>;
}

export default MultiStepForm;
