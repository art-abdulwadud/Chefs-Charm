import React from 'react';
import { FaBowlFood } from 'react-icons/fa6';

const Yields = ({ recipe }) => {
  return (
    <div className="absolute top-3 left-0 px-3 pt-1">
      <div
        className="p-1 px-2 flex gap-1 items-center
        dark:bg-gray-800 dark:text-white
        bg-white text-gray-800"
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
  );
};

export default Yields;
