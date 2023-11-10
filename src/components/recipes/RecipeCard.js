// import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';
import Steps from './recipeCard/opened/Steps';
// import { useMediaQuery } from '../useMediaQuery';

const RecipeCard = ({ recipe, index }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [previousSelectedRecipe, setPreviousSelectedRecipe] = useState(null);
  // const isSmall = useMediaQuery('(max-width: 674px)');
  useEffect(() => {
    return () => setPreviousSelectedRecipe(null);
  }, []);
  return (
    <div
      className={`relative group flex justify-start animate__animated recipe-card
      ${selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden-card animate__fadeOut'}`}
      style={{
        borderRadius: '20px',
        animationDelay: previousSelectedRecipe ? '0.3s' : `${0.3 * index}s`
      }}
    >
      <div
        className={`flex w-100  steps-wrapper-${recipe.id} flex-col md:flex-row
      ${selectedRecipe?.id === recipe?.id ? '' : ''}`}
      >
        <RecipeThumbnail recipe={recipe} />
        <Steps recipe={recipe} />
      </div>
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} setPreviousSelectedRecipe={setPreviousSelectedRecipe} />
    </div>
  );
};

export default RecipeCard;
