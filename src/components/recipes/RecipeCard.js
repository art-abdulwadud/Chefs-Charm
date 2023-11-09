// import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';
import Steps from './recipeCard/opened/Steps';
import { useMediaQuery } from '../useMediaQuery';

const RecipeCard = ({ recipe, index }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [previousSelectedRecipe, setPreviousSelectedRecipe] = useState(null);
  const isSmall = useMediaQuery('(max-width: 674px)');
  const recipeCardVariants = {
    hidden: { opacity: 0, width: 0, maxHeight: '0', minHeight: '0', padding: '0 0', transition: { ease: 'easeInOut', duration: 0.2 } },
    preview: { opacity: 1, maxHeight: '20rem', minHeight: '20rem', width: '20rem', padding: '1rem 1rem', transition: { ease: 'easeInOut' } },
    expand: { opacity: 1, maxHeight: '1000px', minHeight: '100vh', width: '100vw', padding: '1rem 1rem', transition: { ease: 'easeInOut', duration: 1 } }
  };
  useEffect(() => {
    return () => setPreviousSelectedRecipe(null);
  }, []);
  return (
    <motion.div
      className="relative group flex justify-start"
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * index}s`
      }}
      id={`recipe-card-${index}`}
      variants={recipeCardVariants}
      initial="hidden"
      exit="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      onAnimationStart={(state) => {
        // Scroll to the top on expanding a recipe card
        if (state === 'expand' && selectedRecipe?.id === recipe?.id) {
          window.scrollTo(0, 0);
          setPreviousSelectedRecipe(recipe);
        }
      }}
      onAnimationComplete={(state) => {
        // Scroll to last opened card on going back to recipe cards
        // and use scale to indicate to the user exactly which card was opened last
        if (state === 'preview' && previousSelectedRecipe && recipe?.id === previousSelectedRecipe.id) {
          setTimeout(() => {
            // Scroll to last opened card
            if (index > 2 || isSmall) document.getElementById(`recipe-card-${index}`)?.scrollIntoView();
            // Edit its scale property to enlarge it and then set it back to its original size
            if (document.getElementById(`recipe-card-${index}`)) {
              setTimeout(() => document.getElementById(`recipe-card-${index}`).style.scale = '1.1', 500);
              setTimeout(() => document.getElementById(`recipe-card-${index}`).style.scale = '1', 1000);
            }
          }, 500);
          setPreviousSelectedRecipe(null);
        }
      }}
    >
      <div
        className={`flex w-100  steps-wrapper-${recipe.id} flex-col md:flex-row
      ${selectedRecipe?.id === recipe?.id ? '' : ''}`}
      >
        <RecipeThumbnail recipe={recipe} />
        <Steps recipe={recipe} />
      </div>
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </motion.div>
  );
};

export default RecipeCard;
