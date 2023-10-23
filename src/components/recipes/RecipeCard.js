// import { useAtom } from 'jotai';
import React from 'react';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
// import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  // const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div
      className="relative h-80 w-80 group bg-amber-400 flex center"
      style={{
        borderRadius: '20px'
      }}
    >
      <RecipeThumbnail recipe={recipe} />
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
