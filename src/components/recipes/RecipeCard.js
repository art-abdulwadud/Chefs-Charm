// import { useAtom } from 'jotai';
import React from 'react';
// import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  // const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className="relative h-80 w-80 shadow-2xl cursor bg-amber-400 flex center" style={{ borderRadius: '20px' }}>
      <img src={recipe?.thumbnail_url} alt={recipe?.slug || ''} className="h-72 w-72" style={{ borderRadius: '50%' }} />
      <div id="preview-info" className="absolute bottom-3 left-0 h-40 w-100 px-3">
        <div
          className="h-36 p-2"
          style={{
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            borderRadius: '20px' }}
        >
          <div className="w-100 flex justify-between text-xs text-gray-900">
            <span>{recipe?.credits?.map((key) => (
              <span key={key.id}>{key.name}</span>
            ))}
            </span>
            <span className="font-light text-gray-700">{recipe?.updated_at ? new Date(recipe.updated_at).toDateString() : new Date().toDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
