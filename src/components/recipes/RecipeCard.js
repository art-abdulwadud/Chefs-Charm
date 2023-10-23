// import { useAtom } from 'jotai';
import React from 'react';
// import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  // const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className="relative h-80 w-80 shadow-2xl cursor bg-amber-400 flex center" style={{ borderRadius: '20px' }}>
      <img src={recipe?.thumbnail_url} alt={recipe?.slug || ''} className="h-72 w-72" style={{ borderRadius: '50%' }} />
      <div className="absolute bottom-3 left-0 h-40 w-100 px-3">
        <div
          className="h-36 p-4"
          style={{
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            borderRadius: '20px' }}
        >
          <span>Hello</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
