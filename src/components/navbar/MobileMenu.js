import React from 'react';
import { MdFoodBank, MdOutlineDynamicFeed, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaTags } from 'react-icons/fa6';
import { useAtom } from 'jotai';
import NavItemSM from './NavItemSM';
import { navOpenedAtom } from './NavBar';

const MobileMenu = () => {
  const [navOpened] = useAtom(navOpenedAtom);
  const mobileMenuVariants = {
    closed: { maxHeight: '0', maxWidth: '0' },
    opened: { maxWidth: '1000px', maxHeight: '1000px' }
  };
  return (
    <div className={`${navOpened ? '' : 'sm:hidden'} md:hidden`} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <NavItemSM delay={0} label="Recipes" link="" icon={<MdFoodBank />} />
        <NavItemSM delay={1} label="Tags" link="/tags" icon={<FaTags />} />
        <NavItemSM delay={2} label="Feeds" link="/feeds" icon={<MdOutlineDynamicFeed />} />
        <NavItemSM delay={3} label="Tips" link="/tips" icon={<MdOutlineTipsAndUpdates />} />
      </div>
    </div>
  );
};

export default MobileMenu;
