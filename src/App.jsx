import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import RecipeCard from './RecipeCard';
import StepCard from './StepCard'; // Import the StepCard component
import steps from './Steps'; // Import the steps data

function App() {
  const recipes = [
    {
      title: 'Boil',
      imageUrl: '/assets/boil.jpg',
    },
    {
      title: 'Fry',
      imageUrl: '/assets/sauce.jpg',
    },
    {
      title: 'Mix',
      imageUrl: '/assets/pasta.jpg',
    },
  ];

  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);

  const handleViewStepsClick = (recipeIndex) => {
    setSelectedRecipeIndex(recipeIndex);
  };

  const handleCloseStepCard = () => {
    setSelectedRecipeIndex(null);
  };

  return (
    <>
    <div className="flex flex-col relative">
      <Header />

      <div className="flex flex-wrap justify-center mt-10 -mb-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex justify-center w-full md:w-1/3 px-2 mb-4">
            <RecipeCard
              title={recipe.title}
              imageUrl={recipe.imageUrl}
              onViewStepsClick={() => handleViewStepsClick(index)}
              step={steps[index]} // Pass the step from the steps array
            />
          </div>
        ))}
      </div>

      {/* Conditionally render the StepCard */}
      {selectedRecipeIndex !== null && (
        <StepCard
          step={steps[selectedRecipeIndex]}
          onClose={handleCloseStepCard}
        />
      )}

    </div>
     {/* GIF Image */}
     <div className="absolute bottom-0 left-0" style={{ zIndex: 999 }}>
        <img
          src="/assets/giphy (2).gif"
          alt="GIF Image"
          width="150"
          height="150"
        />
      </div>
    </>
  );
}

export default App;
