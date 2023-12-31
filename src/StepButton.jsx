import { useState } from 'react';
import StepCard from './StepCard'; 
import steps from './Steps'; 
import PropTypes from 'prop-types'; // Import PropTypes

const StepButton = ({ text }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleButtonClick = () => {
    const stepIndex = parseInt(text.split(' ')[1]) - 1; // Extract the step number from the button text
    if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < steps.length) {
      setSelectedStep({
        step: steps[stepIndex],
      });
    }
  };

  const handleCloseStepCard = () => {
    setSelectedStep(null);
  };

  return (
    <div>
      <button
        className="bg-orange-500 hover-bg-orange-700 text-white p-6 rounded transition duration-300 ease-in-out ml-8"
        onClick={handleButtonClick}
      >
        {text}
      </button>
      {/* Conditionally render the StepCard */}
      {selectedStep && (
        <StepCard
          step={selectedStep.step}
          onClose={handleCloseStepCard}
        />
      )}
    </div>
  );
};

// Define propTypes for the text prop
StepButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StepButton;
