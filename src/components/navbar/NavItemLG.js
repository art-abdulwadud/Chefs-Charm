import { Link } from 'gatsby';
import React from 'react';

const NavItemLG = ({ label, active }) => {
  return (
    <Link
      to="/"
      className={`
        ${active
        ? 'dark:bg-gray-800 bg-white text-amber-400 shadow-2xl shadow-gray-800/80'
        : 'dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white text-white hover:bg-gray-50 hover:text-gray-500 hover:shadow-2xl hover:shadow-gray-800/80 cursor-pointer'} 
        block rounded-b-lg px-3 py-2 text-base font-medium transition-all duration-300`}
      aria-current="page"
    >
      {label}
    </Link>
  );
};

export default NavItemLG;
