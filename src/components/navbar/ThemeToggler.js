import React from 'react';
import { Switch } from '@headlessui/react';
import { useAtom } from 'jotai';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { darkModeAtom } from '../layout';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <div className="mx-auto flex right">
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Set theme</span>
        <span
          aria-hidden="true"
          className={`${darkMode ? 'translate-x-0 text-white' : 'translate-x-9 text-gray-800'} flex center absolute top-0 left-0 px-2
            pointer-events-none h-[34px] w-[34px]transition duration-200 ease-in-out`}
        >
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <span
          aria-hidden="true"
          className={`${darkMode ? 'translate-x-9' : 'translate-x-0'} flex center
            pointer-events-none h-[34px] w-[34px] transform rounded-full bg-amber-400 shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </span>
      </Switch>
    </div>
  );
};

export default ThemeToggler;
