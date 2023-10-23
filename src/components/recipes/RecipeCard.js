// import { useAtom } from 'jotai';
import React from 'react';
import { FaCircleChevronRight, FaBowlFood } from 'react-icons/fa6';
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
        className="h-72 w-72 group-hover:shadow-xl group-hover:shadow-slate-800 shadow-lg shadow-slate-800 duration-500"
        style={{
          borderRadius: '5px',
          borderTopRightRadius: '20%' }}
      />
      <div className="absolute top-3 left-0 px-3 pt-1">
        <div
          className="p-1 px-2 bg-gray-800 text-white flex gap-1 items-center"
          style={{
            borderRadius: '20px',
            borderTopLeftRadius: '5px' }}
        >
          <FaBowlFood className="text-sm text-amber-400" />
          <span className="text-sm">{recipe?.yields?.includes('Servings:')
            ? `${recipe.yields.split(' ')[1]} Servings` : !recipe?.yields?.includes('Servings:')
              ? recipe.yields : ''}
          </span>
        </div>
      </div>
      <div id="preview-info" className="absolute bottom-3 left-0 h-40 w-100 px-3">
        <div
          className="h-36 p-2 shadow-xl"
          style={{
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            borderRadius: '10px' }}
        >
          <div className="w-100 flex justify-between text-xs text-white">
            <span>{recipe?.credits?.map((key) => (
              <span key={key.name}>{key.name}</span>
            ))}
            </span>
            <span className="font-light text-gray-100">{recipe?.updated_at ? new Date(recipe.updated_at).toDateString() : new Date().toDateString()}</span>
          </div>
          <div className="mt-3 text-white">
            <span className="font-medium text-base">{recipe?.name}</span>
            <br />
            <span className="font-light text-xs short-text">{recipe?.description}</span>
          </div>
          <div className="flex items-center justify-start mt-2 text-amber-400 gap-2 cursor">
            <span className="text-xs">Read More</span>
            <FaCircleChevronRight className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
