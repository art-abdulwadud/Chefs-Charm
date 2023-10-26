import { useAtom } from 'jotai';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaBowlFood, FaRegCalendarDays } from 'react-icons/fa6';
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
      <div className="flex justify-evenly gap-2">
        <span className="flex gap-2">
          <FaUser className="text-amber-400" />
          <span>{recipe.credits?.length > 0 ? recipe.credits[0].name : ''}</span>
        </span>
        <span className="flex gap-2">
          <FaBowlFood className="text-amber-400" />
          <span>{recipe?.yields?.includes('Servings:')
            ? `${recipe.yields.split(' ')[1]} Servings` : !recipe?.yields?.includes('Servings:')
              ? recipe.yields : ''}
          </span>
        </span>
        <span className="flex gap-2">
          <FaRegCalendarDays className="text-amber-400" />
          <span>{recipe?.approved_at ? new Date(recipe.approved_at).toDateString()?.slice(0, -4) : new Date().toDateString().slice(0, -4)}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
