import { useAtom } from 'jotai';
import React from 'react';
import { selectedRecipeAtom } from '../../Recipes';

const Header = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className={`animate__animated duration-500 absolute top-0 left-0 w-100 flex center column
    ${selectedRecipe?.id === recipe?.id ? 'animate__rotateInUpRight' : !selectedRecipe ? 'animate__rotateOutUpRight' : 'animate__rotateOutUpRight'}`}
    >
      <p className="m-0 font-medium text-2xl text-center">
        {recipe?.name}
      </p>
      <div className="flex justify-evenly">
        <span>{recipe.credits?.length > 0 ? recipe.credits[0].name : ''}</span>
        <span>{recipe?.yields?.includes('Servings:')
          ? `${recipe.yields.split(' ')[1]} Servings` : !recipe?.yields?.includes('Servings:')
            ? recipe.yields : ''}
        </span>
        <span>{recipe?.approved_at ? new Date(recipe.approved_at).toDateString()?.slice(0, -4) : new Date().toDateString().slice(0, -4)}</span>
      </div>
    </div>
  );
};

export default Header;
