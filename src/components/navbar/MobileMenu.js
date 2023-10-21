import React, { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import { MdFoodBank, MdOutlineDynamicFeed, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaTags } from 'react-icons/fa6';
import { useAtom } from 'jotai';
import NavItemSM from './NavItemSM';
import { navOpenedAtom } from './NavBar';

const MobileMenu = () => {
  const [navOpened] = useAtom(navOpenedAtom);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    navOpened
      ? animate('div', { maxWidth: '1000px', maxHeight: '1000px', opacity: 1 }, { duration: 0.6 })
      : animate('div', { maxHeight: '0', maxWidth: '0', opacity: 0 }, { duration: 0.6 });
    return () => animate('div', { maxHeight: '0', maxWidth: '0', opacity: 0 }, { duration: 0.6 });
  }, [navOpened]);
  return (
    <div
      ref={scope}
      className={`md:hidden overflow-hidden collapsible ${navOpened ? '' : 'collapsed'}`}
      style={{ transition: 'all 0.6s ease-in-out' }}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2 duration-500">
        <NavItemSM delay={0} label="Recipes" link="" icon={<MdFoodBank />} />
        <NavItemSM delay={1} label="Tags" link="/tags" icon={<FaTags />} />
        <NavItemSM delay={2} label="Feeds" link="/feeds" icon={<MdOutlineDynamicFeed />} />
        <NavItemSM delay={3} label="Tips" link="/tips" icon={<MdOutlineTipsAndUpdates />} />
      </div>
    </div>
  );
};

export default MobileMenu;
