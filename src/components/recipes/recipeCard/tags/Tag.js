import { useAtom } from 'jotai';
import React from 'react';
import { selectedTagAtom } from '../../Recipes';

const Tag = ({ label, delay }) => {
  const [selectedTag, setSelectedTag] = useAtom(selectedTagAtom);
  return (
    <li
      className={`
      ${selectedTag && selectedTag === label ? 'text-white dark:text-gray-800 bg-amber-400'
        : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white'}
        animate__animated animate__bounceInDown
       p-2 rounded-lg shadow-md shadow-gray-800/40 dark:shadow-white/10
      cursor
      `}
      style={{ animationDelay: `${0.3 * delay}s` }}
      onClick={() => setSelectedTag(label)}
    >
      #{label}
    </li>
  );
};

export default Tag;
