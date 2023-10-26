// import { useAtom } from 'jotai';
import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';
import Header from './recipeCard/opened/Header';

const RecipeCard = ({ recipe, delay }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const recipeCardVariants = {
    hidden: { width: 0, maxHeight: '0', minHeight: '0', padding: '0 0', backgroundColor: 'rgba(251, 191, 36, 0)', transition: { ease: 'easeInOut' } },
    preview: { maxHeight: '20rem', minHeight: '20rem', width: '20rem', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 1)', transition: { ease: 'easeInOut' } },
    expand: { maxHeight: '1000px', minHeight: '100vh', width: '100vw', padding: '1rem 1rem', backgroundColor: 'rgba(251, 191, 36, 0)', transition: { ease: 'easeInOut', duration: 0.5 } }
  };
  return (
    <motion.div
      className={`relative group flex justify-start duration-500 animate__animated animate__rotateInUpRight overflow-hidden
      ${selectedRecipe?.id === recipe?.id ? '' : !selectedRecipe ? '' : 'animate__rotateOutUpRight'}`}
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * delay}s`
      }}
      variants={recipeCardVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
    >
      <Header recipe={recipe} />
      <RecipeThumbnail recipe={recipe} />
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </motion.div>
  );
};

export default RecipeCard;
