import React from 'react';

const FetchMoreButton = ({ dataLength, recipeCount, fetchNextPage }) => {
  return (
    <div className="relative z-20 py-3 flex center">
      <button
        type="button"
        className={`flex flex-col center
        border-none py-2 px-4 rounded-2xl bg-amber-400 text-gray-800
        `}
        onClick={() => fetchNextPage()}
      >
        <span className="text-xs">{dataLength} / {recipeCount}</span>
        <span className="text-lg">Show More</span>
      </button>
    </div>
  );
};

export default FetchMoreButton;
