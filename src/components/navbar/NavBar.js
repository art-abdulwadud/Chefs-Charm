import React from 'react';
import { motion } from 'framer-motion';
import NavToggler from './NavToggler';
import NavItemLG from './NavItemLG';

const NavBar = () => {
  const navVariants = {
    closed: { width: '0.4%', transform: 'translateX(0%)', flex: 'none' },
    opened: { width: '100%', transform: 'translateX(0%)', flex: '1 1 auto' }
  };
  return (
    <div className="flex items-center justify-center animate__animated animate__rotateIn duration-100" style={{ width: '100vw' }}>
      <motion.nav
        className="relative overflow-hidden bg-amber-400 mx-12 md:mx-8 sm:mx-4 md:rounded-b-lg dark shadow-2xl z-50 transition-all"
        variants={navVariants}
        initial="closed"
        animate="opened"
        transition={{ duration: 3, delay: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <NavToggler />
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-11 w-11" src="/logo-tp.png" alt="logo" />
              </div>
              <div className="hidden md:mx-auto md:block">
                <div className="flex space-x-4">
                  <NavItemLG label="Dashboard" active />
                  <NavItemLG label="Team" />
                  <NavItemLG label="Projects" />
                  <NavItemLG label="Calendar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
