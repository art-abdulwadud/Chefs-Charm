import { useAtom } from 'jotai';
import React from 'react';
import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className="h-80 w-80 shadow-2xl cursor" style={{ borderRadius: '20px' }}>
      <img src={recipe?.thumbnail_url} alt={recipe?.slug || ''} className="h-80 w-80" style={{ borderRadius: '20px' }} />
    </div>
  );
};

export default RecipeCard;
