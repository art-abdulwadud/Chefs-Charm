import React from 'react';
import { MdFoodBank, MdOutlineDynamicFeed, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaTags } from 'react-icons/fa6';
import NavItemSM from './NavItemSM';

const MobileMenu = () => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <NavItemSM delay={0} label="Recipes" active icon={<MdFoodBank />} />
        <NavItemSM delay={1} label="Tags" icon={<FaTags />} />
        <NavItemSM delay={2} label="Feeds" icon={<MdOutlineDynamicFeed />} />
        <NavItemSM delay={3} label="Tips" icon={<MdOutlineTipsAndUpdates />} />
      </div>
    </div>
  );
};

export default MobileMenu;
