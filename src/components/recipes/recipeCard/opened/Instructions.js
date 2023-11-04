import React from 'react';

const Instructions = ({ recipe, tabIndex }) => {
  return (
    <ul className={`list-disc animate__animated animate__fatser
    ${tabIndex === 0 ? 'animate__fadeIn max-h-[20rem] relative' : 'animate__fadeOut max-h-[0rem]'}`}
    >
      {recipe?.instructions?.map((key) => (
        <li key={key.id} className="dark:text-white text-gray-800 mb-3">{key.display_text || ''}</li>
      ))}
    </ul>
  );
};

export default Instructions;
