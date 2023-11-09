import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { selectedRecipeAtom } from '../../Recipes';
import TabMenu from './TabMenu';
import Instructions from './Instructions';
import Header from './Header';

const Steps = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [tabIndex, setTabIndex] = useState(0);
  const variants = {
    hidden: { opacity: 0, maxWidth: 0, maxHeight: 0, minHeight: 0, minWidth: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
    visible: { opacity: 1, maxHeight: '30rem', minHeight: '25rem', maxWidth: '60rem', minWidth: '20rem', transition: { ease: 'easeInOut' } }
  };
  useEffect(() => {
    return () => setTabIndex(0);
  }, [selectedRecipe]);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'visible' : 'hidden'}
      className={`dark:bg-gray-800 dark:text-white bg-white text-gray-800  px-2 py-4 pl-7
    overflow-x-hidden animate__animated z-0 animate__fast rounded-lg mt-4 md:mt-0 duration-500
    shadow-md shadow-gray-800/40 dark:shadow-white/10
    ${selectedRecipe?.id === recipe?.id
        ? 'animate__fadeInDown' : 'animate__slideOutDown'}`}
      style={{ animationDuration: selectedRecipe ? '2s' : '1s' }}
    >
      <TabMenu setTabIndex={setTabIndex} tabIndex={tabIndex} />
      <Instructions recipe={recipe} tabIndex={tabIndex} />
      <Header recipe={recipe} index={tabIndex} />
    </motion.div>
  );
};

export default Steps;
