import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { selectedRecipeAtom } from '../Recipes';

const RecipeThumbnail = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const thumbnailVariants = {
    hidden: { width: 0, maxHeight: '0', minHeight: '0', transition: { ease: 'easeInOut', duration: 1 } },
    preview: { maxHeight: '18rem', minHeight: '18rem', width: '18rem', borderRadius: '5px', borderTopRightRadius: '20%', transition: { ease: 'easeInOut', duration: 1 } },
    expand: { maxHeight: '1000px', minHeight: '100vh', width: '50vw', borderRadius: '5px', borderTopRightRadius: '5px', transition: { ease: 'easeInOut', duration: 1 } }
  };
  return (
    <motion.img
      src={recipe?.thumbnail_url}
      alt={recipe?.slug || ''}
      variants={thumbnailVariants}
      initial="hidden"
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      className="group-hover:shadow-xl shadow-lg
      group-hover:shadow-gray-800/70 shadow-gray-800/60
      duration-500"
    />
  );
};

export default RecipeThumbnail;
