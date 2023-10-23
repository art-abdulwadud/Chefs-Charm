import { useAtom } from 'jotai';
import React from 'react';
import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className="h-28 w-28 z-3">
      <img src={recipe?.thumbnail_url} alt={recipe?.slug || ''} className="h-28 w-28" />
    </div>
  );
};

export default RecipeCard;
