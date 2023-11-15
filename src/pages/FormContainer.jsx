import React, { useState } from "react";
import Form1A from "../formSteps/Form1A";
import Form1B from "../formSteps/Form1B";
import Form2A from "../formSteps/Form2A";
import Form2B from "../formSteps/Form2B";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    year: null,
    // other fields for subsequent steps
  });

  // Function to move to the next step
  const nextStep = () => setCurrentStep(currentStep + 1);

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
        return <Form1A updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <Form1B updateFormData={updateFormData} nextStep={nextStep} />;
      case 3:
        return <Form2A updateFormData={updateFormData} nextStep={nextStep} />;
      case 4:
        return <Form2B updateFormData={updateFormData} nextStep={nextStep} />;
      default:
        return <div>Form Completed</div>;
    }
  };

  return <div>{renderStep()}</div>;
}

export default MultiStepForm;
