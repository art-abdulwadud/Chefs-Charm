import { useAtom } from 'jotai';
import React from 'react';
import { FaCircleLeft } from 'react-icons/fa6';
import { selectedRecipeAtom } from '../../Recipes';

const TabMenu = ({ tabIndex, setTabIndex }) => {
  const activeTab = 'text-amber-400 border-amber-400 ';
  const [, setSelectedRecipe] = useAtom(selectedRecipeAtom);
  const inactiveTab = 'border-white/5';
  return (
    <div className="flex gap-2 text-base mb-4 z-10 relative">
      <span
        className={`flex center gap-1 p-1 cursor font-medium duration-200
        text-red-500`}
        onClick={() => setSelectedRecipe(null)}
      ><FaCircleLeft /> Back
      </span>
      <span
        className={`
      ${tabIndex === 0 ? activeTab : inactiveTab}
      p-1 cursor font-medium duration-200 border-b-2`}
        onClick={() => setTabIndex(0)}
      >Instructions
      </span>
      <span
        className={`
      ${tabIndex === 1 ? activeTab : inactiveTab}
      p-1 cursor font-medium duration-200 border-b-2`}
        onClick={() => setTabIndex(1)}
      >About
      </span>
    </div>
  );
};

export default TabMenu;
