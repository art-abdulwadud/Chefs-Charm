import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaBowlFood, FaRegCalendarDays } from 'react-icons/fa6';

const Header = ({ recipe, index }) => {
  return (
    <div className={`animate__animated w-100 flex left column z-20 animate__faster
    ${index === 1 ? 'animate__fadeIn max-h-[20rem]' : 'animate__fadeOut max-h-[0rem] absolute top-[4.1rem] z-0'}`}
    >
      <p className="m-0 font-bold text-2xl text-white p-2 mb-2 dark:rounded-xl">
        {recipe?.name}
      </p>
      <div className="flex justify-evenly gap-2 text-white">
        <span className="flex gap-2 center border-r-2 border-amber-400 px-2 pr-4 p-1">
          <FaUser className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe.credits?.length > 0 ? recipe.credits[0].name : ''}</span>
        </span>
        <span className="flex gap-2 center border-r-2 border-amber-400 px-2 pr-4 p-1">
          <FaBowlFood className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe?.yields?.includes('Servings:')
            ? `${recipe.yields.split(' ')[1]} Servings` : !recipe?.yields?.includes('Servings:')
              ? recipe.yields : ''}
          </span>
        </span>
        <span className="flex gap-2 center pl-2 p-1">
          <FaRegCalendarDays className="text-amber-400" />
          <span className="font-medium text-xs md:text-base">{recipe?.approved_at ? new Date(recipe.approved_at).toDateString()?.slice(0, -4) : new Date().toDateString().slice(0, -4)}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
