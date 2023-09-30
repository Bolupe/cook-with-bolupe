import PropTypes from 'prop-types'; // Import PropTypes

const StepCard = ({ step }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-md relative z-50 w-6/12">
      <span className="text-gray-700 text-sm">{step}</span>
    </div>
  );
};

// Define propTypes for the step prop
StepCard.propTypes = {
  step: PropTypes.string.isRequired,
};

export default StepCard;
