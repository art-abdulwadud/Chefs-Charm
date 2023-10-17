import React from 'react';
import { motion } from 'framer-motion';
import { MdFoodBank, MdOutlineDynamicFeed, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaTags } from 'react-icons/fa6';
import NavToggler from './NavToggler';
import NavItemLG from './NavItemLG';
import NavItemSM from './NavItemSM';

const NavBar = () => {
  const navVariants = {
    closed: { width: '0.4%', transform: 'translateX(0%)', flex: 'none' },
    opened: { width: '100%', transform: 'translateX(0%)', flex: '1 1 auto' }
  };
  return (
    <div className="flex items-center justify-center animate__animated animate__rotateIn duration-100" style={{ width: '100vw' }}>
      <motion.nav
        className="relative overflow-hidden bg-amber-400 mx-12 md:mx-8 sm:mx-4 md:rounded-b-lg shadow-2xl z-50 transition-all"
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
                <img className="h-11 w-11 animate__animated animate__rotateIn animate__delay-2s" src="/logo-tp.png" alt="logo" />
              </div>
              <div className="hidden md:mx-auto md:block">
                <div className="flex space-x-4">
                  <NavItemLG delay={0} label="Recipes" active icon={<MdFoodBank />} />
                  <NavItemLG delay={1} label="Tags" icon={<FaTags />} />
                  <NavItemLG delay={2} label="Feeds" icon={<MdOutlineDynamicFeed />} />
                  <NavItemLG delay={3} label="Tips" icon={<MdOutlineTipsAndUpdates />} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavItemSM delay={0} label="Recipes" active icon={<MdFoodBank />} />
            <NavItemSM delay={1} label="Tags" icon={<FaTags />} />
            <NavItemSM delay={2} label="Feeds" icon={<MdOutlineDynamicFeed />} />
            <NavItemSM delay={3} label="Tips" icon={<MdOutlineTipsAndUpdates />} />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
