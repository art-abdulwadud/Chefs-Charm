import React, { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { useAtom } from 'jotai';
import { navOpenedAtom } from './NavBar';
import SearchBar from '../searchbar/SearchBar';

const MobileMenu = () => {
  const [navOpened] = useAtom(navOpenedAtom);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    navOpened
      ? animate('div', { maxWidth: '1000px', maxHeight: '1000px', opacity: 1 }, { duration: 0.6 })
      : animate('div', { maxHeight: '0px', maxWidth: '0px', opacity: 0 }, { duration: 0.6 });
    return () => animate('div', { maxHeight: '0px', maxWidth: '0px', opacity: 0 }, { duration: 0.6 });
  }, [navOpened]);
  return (
    <div
      ref={scope}
      className={`md:hidden overflow-hidden collapsible ${navOpened ? '' : 'collapsed'}`}
      style={{ transition: 'all 0.6s ease-in-out' }}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2 duration-500">
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileMenu;
