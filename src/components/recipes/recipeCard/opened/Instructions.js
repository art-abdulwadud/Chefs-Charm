import React from 'react';

const Instructions = ({ recipe }) => {
  return (
    <ul className="list-disc">
      {recipe?.instructions?.map((key) => (
        <li key={key.id} className="text-white">{key.display_text || ''}</li>
      ))}
    </ul>
  );
};

export default Instructions;
