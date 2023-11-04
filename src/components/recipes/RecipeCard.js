// import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';
import Steps from './recipeCard/opened/Steps';

const RecipeCard = ({ recipe, delay }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const [previousSelectedRecipe, setPreviousSelectedRecipe] = useState(null);
  const recipeCardVariants = {
    hidden: { opacity: 0, width: 0, maxHeight: '0', minHeight: '0', padding: '0 0', backgroundColor: 'rgba(251, 191, 36, 0)', transition: { ease: 'easeInOut', duration: 1 } },
    preview: { opacity: 1, maxHeight: '20rem', minHeight: '20rem', width: '20rem', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 1)', transition: { ease: 'easeInOut', duration: 1 } },
    expand: { opacity: 1, maxHeight: '1000px', minHeight: '100vh', width: '100vw', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 0)', transition: { ease: 'easeInOut', duration: 1 } }
  };
  return (
    <motion.div
      className="relative group flex justify-start duration-500 overflow-hidden"
      id={`recipe-card-${delay}`}
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * delay}s`
      }}
      variants={recipeCardVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      onAnimationComplete={(state) => {
        if (state === 'expand' && selectedRecipe?.id === recipe?.id) {
          window.scrollTo(0, 0);
          setPreviousSelectedRecipe(recipe);
        }
        if (state === 'preview' && previousSelectedRecipe && recipe?.id === previousSelectedRecipe.id) {
          if (delay > 6) {
            setTimeout(() => {
              document.getElementById(`recipe-card-${delay}`)?.scrollIntoView();
            }, 500);
          }
          setPreviousSelectedRecipe(null);
        }
      }}
    >
      <div className={`flex w-100  steps-wrapper-${recipe.id} flex-col md:flex-row
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
