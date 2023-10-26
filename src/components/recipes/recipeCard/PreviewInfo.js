import { useAtom } from 'jotai';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { selectedRecipeAtom } from '../Recipes';

const PreviewInfo = ({ recipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useAtom(selectedRecipeAtom);
  const previewVariants = {
    hidden: { width: '0', maxHeight: '0', minHeight: '0', padding: '0', transition: { ease: 'easeInOut' } },
    preview: { maxHeight: '9rem', minHeight: '9rem', width: '100%', padding: '0.5rem', transition: { ease: 'easeInOut' } }
  };
  return (
    <div
      id="preview-info"
      className={`absolute bottom-3 left-0 h-40 w-100 animate__animated animate__fast z-10 p-2
    ${selectedRecipe?.id === recipe?.id ? 'animate__fadeOutDown' : !selectedRecipe ? 'animate__fadeInUp' : 'animate__fadeOutDown'}`}
    >
      <motion.div
        className="shadow-xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-lg overflow-hidden"
        variants={previewVariants}
        initial="hidden"
        animate={selectedRecipe?.id === recipe?.id ? 'hidden' : !selectedRecipe ? 'preview' : 'hidden'}
      >
        <div className="w-100 flex justify-between text-xs text-gray-800 dark:text-white">
          <span
            className="short-text"
            style={{
              WebkitLineClamp: '1',
              maxWidth: '185px',
              minHeight: '5px'
            }}
          >{recipe?.credits?.map((key, index) => (
            <span
              key={key.name}
              className="font-medium mr-1"
            >{key.name}{index === recipe.credits.length - 1 ? '' : ','}
            </span>
          ))}
          </span>
          <span className="font-light">{recipe?.approved_at ? new Date(recipe.approved_at).toDateString()?.slice(0, -4) : new Date().toDateString().slice(0, -4)}</span>
        </div>
        <div className="mt-3 dark:text-white text-gray-800">
          <span className="font-medium text-base">{recipe?.name}</span>
          <br />
          <span className="font-light text-xs short-text">{recipe?.description}</span>
        </div>
        <button
          type="button"
          className="border-0 flex items-center justify-start mt-2 text-amber-700 dark:text-amber-400 gap-2 cursor"
          onClick={() => selectedRecipe ? setSelectedRecipe(null) : setSelectedRecipe(recipe)}
        >
          <span className="text-xs font-medium">Read More</span>
          <FaCircleChevronRight className="text-sm" />
        </button>
      </motion.div>
    </div>
  );
};

export default PreviewInfo;
