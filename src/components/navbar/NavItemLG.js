import React from 'react';
import { motion } from 'framer-motion';

const NavItemLG = ({ label, active }) => {
  return (
    <motion.a
      whileHover={{ ...active ? {} : { rotate: 360 } }}
      to="/"
      className={`
        ${active
        ? 'dark:bg-gray-800 bg-white text-amber-400 shadow-2xl shadow-gray-800/80'
        : 'dark:text-gray-800 dark:hover:border-gray-800 text-white hover:border-white hover:border-solid hover:border hover:shadow-2xl hover:shadow-gray-800/80 cursor-pointer'} 
        block rounded-b-lg px-3 py-2 text-base font-medium transition-all duration-300`}
      aria-current="page"
    >
      <motion.span className="w-100 h-100">{label}</motion.span>
    </motion.a>
  );
};

export default NavItemLG;
