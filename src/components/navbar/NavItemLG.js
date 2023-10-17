import React from 'react';
import { useAtom } from 'jotai';
import { pageAtom } from '../layout';

// NavItemLG is a React component for rendering a navigation item for large screens.
// It accepts props for label, active state, delay, and an icon.
const NavItemLG = ({ label, delay, icon, link }) => {
  const [page] = useAtom(pageAtom);
  return (
    <a
      href="/"
      className={`group relative overflow-hidden animate__animated animate__bounceInDown
    ${page === `/${link}` || (link !== '' && page.includes(link))
        ? 'dark:bg-gray-800 bg-white text-amber-400 shadow-2xl shadow-gray-800/80'
        : 'shadow-2xl hover:shadow-gray-800/80 cursor-pointer'} 
    block rounded-b-lg px-3 py-2 text-base font-medium transition-all duration-300`}
      aria-current="page"
      style={{ animationDelay: `${1 + (0.3 * delay)}s` }}
    >
      <div className={`absolute inset-0 w-0 bg-amber-400 dark:group-hover:bg-gray-800 group-hover:bg-white transition-all duration-500 ease-out 
        ${page === `/${link}` || (link !== '' && page.includes(link)) ? '' : 'group-hover:w-full'}
        `}
      />
      <span className={`relative flex items-center justify-between
        ${page === `/${link}` || (link !== '' && page.includes(link)) ? 'text-amber-400' : 'text-white group-hover:text-gray-800 dark:text-gray-800 dark:group-hover:text-white duration-500 ease-in'}`}
      >
        <span className="text-lg mr-2">{icon}</span>
        <span>{label}</span>
      </span>
    </a>
  );
};

export default NavItemLG;
