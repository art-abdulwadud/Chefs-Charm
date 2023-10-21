import React from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { navOpenedAtom } from './NavBar';

const NavToggler = () => {
  const [navOpened, setNavOpened] = useAtom(navOpenedAtom);
  return (
    <motion.div
      className="absolute inset-y-0 left-0 flex items-center md:hidden transition-all duration-300 delay-300"
      variants={{
        hide: { maxWidth: '0', maxHeight: '0' },
        show: { maxWidth: '1000px', maxHeight: '1000px' }
      }}
      initial="hide"
      animate="show"
    >
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-amber-400 dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-0"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => setNavOpened(!navOpened)}
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

export default NavToggler;
