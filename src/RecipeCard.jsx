import React, { useState } from 'react';
import StepCard from './StepCard';
import { FaTimes } from 'react-icons/fa';

const RecipeCard = ({ title, imageUrl, onViewStepsClick, step }) => {
  const [showSteps, setShowSteps] = useState(false);

  const handleViewStepsClick = () => {
    setShowSteps(true);
  };

  const handleCloseSteps = () => {
    setShowSteps(false);
  };

  return (
    <div className="bg-white border border-gray-300 p-2 rounded-md shadow-md w-fit h-fit relative overflow-hidden transition-transform">
      <h2 className="text-md font-semibold mb-2">{title}</h2>
      <img
        src={imageUrl}
        alt="Recipe"
        className="rounded-lg object-cover mb-2"
      />
      <button
        onClick={showSteps ? handleCloseSteps : handleViewStepsClick}
        className={`bg-orange-500 hover:bg-orange-700 text-white p-2 rounded-full transition duration-300 ease-in-out ${
          showSteps ? 'mb-4' : ''
        }`}
      >
        {showSteps ? 'Close Steps' : 'View Steps'}
      </button>
      {showSteps && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <StepCard step={step} />
          <button
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white p-1 rounded-full"
            onClick={handleCloseSteps}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
