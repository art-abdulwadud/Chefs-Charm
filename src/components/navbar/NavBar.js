import React from 'react';
import NavToggler from './NavToggler';
import NavItemLG from './NavItemLG';

const NavBar = () => {
  return (
    <nav className="bg-amber-400 mx-12 md:mx-8 sm:mx-4 md:rounded-b-lg shadow-2xl">
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
    </nav>
  );
};

export default NavBar;
