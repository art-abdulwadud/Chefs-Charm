import React from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

const PreviewInfo = ({ recipe }) => {
  return (
    <div id="preview-info" className="absolute bottom-3 left-0 h-40 w-100 px-3">
      <div
        className="h-36 p-2 shadow-xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-lg"
      >
        <div className="w-100 flex justify-between text-xs text-gray-800 dark:text-white">
          <span>{recipe?.credits?.map((key) => (
            <span key={key.name}>{key.name}</span>
          ))}
          </span>
          <span className="font-light">{recipe?.updated_at ? new Date(recipe.updated_at).toDateString() : new Date().toDateString()}</span>
        </div>
        <div className="mt-3 dark:text-white text-gray-800">
          <span className="font-medium text-base">{recipe?.name}</span>
          <br />
          <span className="font-light text-xs short-text">{recipe?.description}</span>
        </div>
        <div className="flex items-center justify-start mt-2 text-amber-700 dark:text-amber-400 gap-2 cursor">
          <span className="text-xs font-medium">Read More</span>
          <FaCircleChevronRight className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default PreviewInfo;
