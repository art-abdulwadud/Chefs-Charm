// import { useAtom } from 'jotai';
import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe, delay }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const recipeCardVariants = {
    hidden: { width: 0, maxHeight: '0', minHeight: '0', padding: '0 0', transition: { ease: 'easeInOut' } },
    preview: { maxHeight: '20rem', minHeight: '20rem', width: '20rem', padding: '1rem 1rem', transition: { ease: 'easeInOut', duration: 1 } },
    expand: { maxHeight: '1000px', minHeight: '100vh', width: '100vw', padding: '1rem 1rem', transition: { ease: 'easeInOut', duration: 1 } }
  };
  return (
    <motion.div
      className={`relative group bg-amber-400 flex justify-start duration-500 animate__animated animate__rotateInUpRight overflow-hidden
      ${selectedRecipe?.id === recipe?.id ? '' : !selectedRecipe ? '' : 'animate__rotateOutUpRight'}`}
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * delay}s`
      }}
      variants={recipeCardVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
    >
      <RecipeThumbnail recipe={recipe} />
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </motion.div>
  );
};

export default RecipeCard;
