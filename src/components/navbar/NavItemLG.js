import React from 'react';

const NavItemLG = ({ label }) => {
  return (
    <a
      href="#"
      className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
      aria-current="page"
    >
      {label}
    </a>
  );
};

export default NavItemLG;
