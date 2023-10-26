import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { selectedRecipeAtom } from '../../Recipes';
import TabMenu from './TabMenu';

const Steps = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div
      className={`bg-gray-800 text-white px-2 py-4 pl-5
    overflow-scroll animate__animated z-0 animate__fast rounded-lg
    ${selectedRecipe?.id === recipe?.id
        ? 'animate__slideInRight' : 'animate__slideOutRight'}`}
      style={{ maxHeight: '30rem', minHeight: '25rem', maxWidth: '35rem' }}
    >
      <TabMenu setTabIndex={setTabIndex} tabIndex={tabIndex} />
      <p className="m-0">INSTRUCTIONS</p>
      <ul className="list-none">
        {recipe?.instructions?.map((key) => (
          <li key={key.id} className="text-white">{key.display_text || ''}</li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
