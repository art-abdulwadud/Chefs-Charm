// import { useAtom } from 'jotai';
import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Yields from './recipeCard/Yields';
import PreviewInfo from './recipeCard/PreviewInfo';
import RecipeThumbnail from './recipeCard/RecipeThumbnail';
import { selectedRecipeAtom } from './Recipes';

const RecipeCard = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const recipeCardVariants = {
    hidden: { opacity: 0, width: 0, height: 0 },
    preview: { opacity: 1, height: '20rem', width: '20rem' },
    expand: { opacity: 1, height: 'auto', minHeight: '100vh', width: '100vw' },
    exit: { opacity: 0, width: 0, height: 0, transition: { ease: 'easeInOut' } }
  };
  return (
    <motion.div
      className="relative group bg-amber-400 flex center duration-500"
      style={{
        borderRadius: '20px'
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
