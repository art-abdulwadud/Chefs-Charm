import React from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

const PreviewInfo = ({ recipe }) => {
  return (
    <div id="preview-info" className="absolute bottom-3 left-0 h-40 w-100 px-3">
      <div
        className="h-36 p-2 shadow-xl"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8))',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          borderRadius: '10px' }}
      >
        <div className="w-100 flex justify-between text-xs text-white">
          <span>{recipe?.credits?.map((key) => (
            <span key={key.name}>{key.name}</span>
          ))}
          </span>
          <span className="font-light text-gray-100">{recipe?.updated_at ? new Date(recipe.updated_at).toDateString() : new Date().toDateString()}</span>
        </div>
        <div className="mt-3 text-white">
          <span className="font-medium text-base">{recipe?.name}</span>
          <br />
          <span className="font-light text-xs short-text">{recipe?.description}</span>
        </div>
        <div className="flex items-center justify-start mt-2 text-amber-400 gap-2 cursor">
          <span className="text-xs">Read More</span>
          <FaCircleChevronRight className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default PreviewInfo;
