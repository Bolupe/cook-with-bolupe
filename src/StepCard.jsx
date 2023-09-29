const StepCard = ({ step }) => {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded shadow-md relative z-50 w-6/12">
      <span className="text-gray-700 text-sm">{step}</span>
    </div>
  );
};

export default StepCard;
