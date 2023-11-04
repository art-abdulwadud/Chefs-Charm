import React from 'react';

const Tag = ({ label }) => {
  return (
    <li className={`
    text-white dark:text-gray-800 p-2 
    bg-amber-400 rounded-lg
    `}
    >
      #{label}
    </li>
  );
};

export default Tag;
