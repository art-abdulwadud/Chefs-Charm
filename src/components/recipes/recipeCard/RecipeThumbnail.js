import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { selectedRecipeAtom } from '../Recipes';

const RecipeThumbnail = ({ recipe }) => {
  const [selectedRecipe] = useAtom(selectedRecipeAtom);
  const thumbnailVariants = {
    hidden: { width: 0, maxHeight: '0', minHeight: '0', transition: { ease: 'easeInOut' } },
    preview: { maxHeight: '18rem', minHeight: '18rem', width: '320px', borderRadius: '5px', borderTopRightRadius: '20%', transition: { ease: 'easeInOut' } },
    expand: { maxHeight: '22rem', minHeight: '22rem', width: '25rem', borderRadius: '5px', borderTopRightRadius: '5px', transition: { ease: 'easeInOut', duration: 0.5 } }
  };
  return (
    <motion.img
      src={recipe?.thumbnail_url}
      alt={recipe?.slug || ''}
      variants={thumbnailVariants}
      initial="hidden"
      id={`recipe-card-${recipe?.id}`}
      animate={selectedRecipe?.id === recipe?.id ? 'expand' : !selectedRecipe ? 'preview' : 'hidden'}
      className={`${selectedRecipe?.id === recipe?.id ? '' : 'group-hover:shadow-xl shadow-lg'}
      group-hover:shadow-gray-800/70 shadow-gray-800/60 z-10 animate__slow
      duration-500 ${selectedRecipe?.id === recipe?.id ? 'md:mt-2 md:-mr-2' : 'm-0'}`}
      style={{ minWidth: '320px' }}
    />
  );
};

export default RecipeThumbnail;
