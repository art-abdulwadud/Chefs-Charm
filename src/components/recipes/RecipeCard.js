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
    preview: { opacity: 1, maxHeight: '20rem', minHeight: '20rem', width: '20rem', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 1)', transition: { ease: 'easeInOut' } },
    expand: { opacity: 1, maxHeight: '1000px', minHeight: '100vh', width: '100vw', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 0)', transition: { ease: 'easeInOut', duration: 1 } }
  };
  return (
    <motion.div
      className="relative group flex justify-start duration-500 overflow-hidden"
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * delay}s`
      }}
      id={`recipe-card-${delay}`}
      variants={recipeCardVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      onAnimationComplete={(state) => {
        // Scroll to the top on expanding a recipe card
        if (state === 'expand' && selectedRecipe?.id === recipe?.id) {
          window.scrollTo(0, 0);
          setPreviousSelectedRecipe(recipe);
        }
        // Scroll to last opened card on going back to recipe cards
        // and use scale to indicate to the user exactly which card was opened last
        if (state === 'preview' && previousSelectedRecipe && recipe?.id === previousSelectedRecipe.id) {
          setTimeout(() => {
            if (delay > 6) document.getElementById(`recipe-card-${delay}`)?.scrollIntoView();
            if (document.getElementById(`recipe-card-${delay}`)) {
              setTimeout(() => document.getElementById(`recipe-card-${delay}`).style.scale = '1.1', 500);
              setTimeout(() => document.getElementById(`recipe-card-${delay}`).style.scale = '1', 1000);
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
