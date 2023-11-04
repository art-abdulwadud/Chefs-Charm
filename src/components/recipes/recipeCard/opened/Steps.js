import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { selectedRecipeAtom } from '../../Recipes';
import TabMenu from './TabMenu';
import Instructions from './Instructions';
import Header from './Header';

const Steps = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    return () => setTabIndex(0);
  }, [selectedRecipe]);
  return (
    <div
      className={`bg-gray-800 text-white px-2 py-4 pl-7
    overflow-scroll animate__animated z-0 animate__fast rounded-lg mt-4 md:mt-0
    ${selectedRecipe?.id === recipe?.id
        ? 'animate__slideInDown' : 'animate__slideOutDown'}`}
      style={{ maxHeight: '30rem', minHeight: '25rem', maxWidth: '60rem', minWidth: '20rem' }}
    >
      <TabMenu setTabIndex={setTabIndex} tabIndex={tabIndex} />
      <Instructions recipe={recipe} tabIndex={tabIndex} />
      <Header recipe={recipe} index={tabIndex} />
    </div>
  );
};

export default Steps;
