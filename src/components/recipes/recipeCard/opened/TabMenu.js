import { useAtom } from 'jotai';
import React from 'react';
import { FaCircleLeft } from 'react-icons/fa6';
import { selectedRecipeAtom } from '../../Recipes';
import animateCSS from '../../../animate';
import { useMediaQuery } from '../../../useMediaQuery';

const TabMenu = ({ recipe, tabIndex, setTabIndex, recipeIndex }) => {
  const activeTab = 'text-amber-400 border-amber-400 ';
  const [, setSelectedRecipe] = useAtom(selectedRecipeAtom);
  const isSmall = useMediaQuery('(max-width: 674px)');
  const inactiveTab = 'border-white/5';
  return (
    <div className="flex gap-2 text-base mb-4 z-10 relative overflow-x-hidden">
      <span
        className={`flex center gap-1 p-1 cursor font-medium duration-200
        text-red-500`}
        onClick={() => {
          setSelectedRecipe(null);
          setTimeout(() => {
            const thumbnail = document.querySelector(`#recipe-card-${recipe?.id}`);
            if (thumbnail) {
              if (recipeIndex > 2 || (isSmall && recipeIndex > 0)) thumbnail.scrollIntoView();
              animateCSS(thumbnail, 'flash');
            }
          }, 1100);
        }}
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
