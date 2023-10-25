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
    hidden: { opacity: 0, width: 0, maxHeight: 0, minHeight: 0, transition: { ease: 'easeInOut' } },
    preview: { opacity: 1, maxHeight: '20rem', minHeight: '20rem', width: '20rem', transition: { ease: 'easeInOut' }, backgroundColor: 'rgba(251, 191, 36, 1)' },
    expand: { opacity: 1, maxHeight: '1000px', minHeight: '100vh', width: '100vw', backgroundColor: 'rgba(251, 191, 36, 0)' },
    exit: { opacity: 0, width: 0, maxHeight: 0, minHeight: 0, transition: { ease: 'easeInOut' } }
  };
  return (
    <motion.div
      className="relative group bg-amber-400 flex center duration-500 animate__animated animate__rotateInUpRight overflow-hidden"
      style={{
        borderRadius: '20px',
        animationDelay: `${0.3 * delay}s`
      }}
      variants={recipeCardVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      exit="exit"
    >
      <RecipeThumbnail recipe={recipe} />
      <Yields recipe={recipe} />
      <PreviewInfo recipe={recipe} />
    </motion.div>
  );
};

export default RecipeCard;
