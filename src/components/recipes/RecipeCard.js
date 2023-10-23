// import { useAtom } from 'jotai';
import React from 'react';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
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
      <img
        src={recipe?.thumbnail_url}
        alt={recipe?.slug || ''}
        className="h-72 w-72 group-hover:shadow-xl group-hover:shadow-slate-700 shadow-lg shadow-slate-700 duration-500"
        style={{
          borderRadius: '5px',
          borderTopRightRadius: '20%' }}
      />
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
