import React from 'react';
import { motion } from 'framer-motion';
import { atom } from 'jotai';
import NavToggler from './NavToggler';
import NavLogo from './NavLogo';
import MobileMenu from './MobileMenu';
import ThemeToggler from './ThemeToggler';
import SearchBar from '../searchbar/SearchBar';

export const navOpenedAtom = atom(false);

const NavBar = () => {
  const navVariants = {
    closed: { width: '0.4%', transform: 'translateX(0%)', flex: 'none' },
    opened: { width: '100%', transform: 'translateX(0%)', flex: '1 1 auto' }
  };
  return (
    <div className="flex items-center justify-center animate__animated animate__rotateIn duration-100 relative z-20" style={{ width: '100vw' }}>
      <motion.nav
        className="overflow-hidden bg-amber-400 mx-12 md:mx-8 sm:mx-4 md:rounded-b-lg shadow-md z-20 transition-all"
        variants={navVariants}
        initial="closed"
        animate="opened"
        transition={{ duration: 3, delay: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <NavToggler />
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLogo />
              <div className="hidden md:mx-auto md:block">
                <div className="flex space-x-4">
                  <SearchBar />
                </div>
              </div>
              <ThemeToggler />
            </div>
          </div>
        </div>
        <MobileMenu />
      </motion.nav>
    </div>
  );
};

export default NavBar;
