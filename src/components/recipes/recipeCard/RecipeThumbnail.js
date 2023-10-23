import React from 'react';

const RecipeThumbnail = ({ recipe }) => {
  return (
    <img
      src={recipe?.thumbnail_url}
      alt={recipe?.slug || ''}
      className="h-72 w-72 group-hover:shadow-xl group-hover:shadow-slate-700 shadow-lg shadow-slate-700 duration-500"
      style={{
        borderRadius: '5px',
        borderTopRightRadius: '20%' }}
    />
  );
};

export default RecipeThumbnail;
