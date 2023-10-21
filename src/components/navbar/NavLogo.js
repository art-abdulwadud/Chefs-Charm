import { navigate } from 'gatsby';
import React from 'react';

const NavLogo = () => {
  return (
    <div className="flex flex-shrink-0 items-center nav-logo m-auto">
      <img
        className="h-11 w-11 animate__animated animate__rotateIn animate__delay-2s"
        src="/logo-tp.png"
        alt="logo"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default NavLogo;
