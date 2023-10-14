import { Link } from 'gatsby';
import React from 'react';

const NavItemLG = ({ label, active }) => {
  return (
    <Link
      to="/"
      className={`${active ? 'bg-gray-800 text-amber-400 shadow-xl shadow-gray-800/40' : 'text-gray-800 hover:bg-gray-800 hover:text-white'} block rounded-b-lg px-3 py-2 text-base font-medium`}
      aria-current="page"
    >
      {label}
    </Link>
  );
};

export default NavItemLG;
