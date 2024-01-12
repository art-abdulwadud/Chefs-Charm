import React from 'react';
import { useAtom } from 'jotai';
import { FaSearch } from 'react-icons/fa';
import { navOpenedAtom } from './NavBar';

const NavToggler = () => {
  const [navOpened, setNavOpened] = useAtom(navOpenedAtom);
  return (
    <div
      className="absolute inset-y-0 left-0 flex items-center md:hidden transition-all duration-300 delay-300"
    >
      <button
        type="button"
        className="relative inline-flex duration-300 items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-amber-400 dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-0"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => setNavOpened(!navOpened)}
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <FaSearch className="block h-6 w-6" />
      </button>
    </div>
  );
};

export default NavToggler;
