import { useAtom } from 'jotai';
import React from 'react';
import { selectedRecipeAtom } from '../../Recipes';

const Steps = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  return (
    <div
      className={`bg-white dark:bg-gray-800 dark:text-white text-gray-800 px-2 py-4 pl-5
    overflow-scroll animate__animated z-0 animate__fast
    ${selectedRecipe?.id === recipe?.id
        ? 'animate__slideInRight' : 'animate__slideOutRight'}`}
      style={{ maxHeight: '30rem', minHeight: '25rem', maxWidth: '35rem' }}
    >
      <p className="m-0">INSTRUCTIONS</p>
      <ul className="list-none">
        {recipe?.instructions?.map((key) => (
          <li key={key.id} className="dark:text-white text-gray-800">{key.display_text || ''}</li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
