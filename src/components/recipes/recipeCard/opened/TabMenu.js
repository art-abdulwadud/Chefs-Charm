import React from 'react';

const TabMenu = ({ tabIndex, setTabIndex }) => {
  const activeTab = 'text-amber-400 border-amber-400 ';
  const inactiveTab = 'border-white/5';
  return (
    <div className="flex gap-2 text-base">
      <span
        className={`
      ${tabIndex === 0 ? activeTab : inactiveTab}
      p-1 cursor font-medium duration-200 border-b-2`}
        onClick={() => setTabIndex(0)}
      >Instructions
      </span>
      <span
        className={`
      ${tabIndex === 1 ? activeTab : inactiveTab}
      p-1 cursor font-medium duration-200 border-b-2`}
        onClick={() => setTabIndex(1)}
      >About
      </span>
    </div>
  );
};

export default TabMenu;
