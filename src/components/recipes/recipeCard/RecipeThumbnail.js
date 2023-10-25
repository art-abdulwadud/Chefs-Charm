import React from 'react';

const RecipeThumbnail = ({ recipe }) => {
  return (
    <img
      src={recipe?.thumbnail_url}
      alt={recipe?.slug || ''}
      className="h-72 w-72 group-hover:shadow-xl shadow-lg
      group-hover:shadow-gray-800/70 shadow-gray-800/60
      duration-500"
      style={{
        borderRadius: '5px',
        borderTopRightRadius: '20%' }}
    />
  );
};

export default RecipeThumbnail;
