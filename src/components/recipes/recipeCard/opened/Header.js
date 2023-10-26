import { useAtom } from 'jotai';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaBowlFood, FaRegCalendarDays } from 'react-icons/fa6';
import { selectedRecipeAtom } from '../../Recipes';

const Header = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div className={`animate__animated duration-100 absolute top-0 left-0 w-100 flex center column
    ${selectedRecipe?.id === recipe?.id ? 'animate__slideInDown' : !selectedRecipe ? 'animate__rotateOutUpRight' : 'animate__rotateOutUpRight'}`}
    >
      <p className="m-0 font-bold text-2xl text-center text-gray-800 dark:text-white dark:bg-gray-800 p-2 mb-2 dark:rounded-xl">
        {recipe?.name}
      </p>
      <div className="flex justify-evenly gap-2 text-gray-800 dark:text-white">
        <span className="flex gap-2 center border-r-2 border-amber-400 px-2 pr-4 dark:bg-gray-800 p-1 dark:border-r-0 dark:rounded-xl">
          <FaUser className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe.credits?.length > 0 ? recipe.credits[0].name : ''}</span>
        </span>
        <span className="flex gap-2 center border-r-2 border-amber-400 px-2 pr-4 dark:bg-gray-800 p-1 dark:border-r-0 dark:rounded-xl">
          <FaBowlFood className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe?.yields?.includes('Servings:')
            ? `${recipe.yields.split(' ')[1]} Servings` : !recipe?.yields?.includes('Servings:')
              ? recipe.yields : ''}
          </span>
        </span>
        <span className="flex gap-2 center pl-2 dark:bg-gray-800 p-1 dark:rounded-xl">
          <FaRegCalendarDays className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe?.approved_at ? new Date(recipe.approved_at).toDateString()?.slice(0, -4) : new Date().toDateString().slice(0, -4)}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
