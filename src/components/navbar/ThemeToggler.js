import React from 'react';
import { Switch } from '@headlessui/react';
import { useAtom } from 'jotai';
import { themeAtom } from '../layout';

const ThemeToggler = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div className="mx-auto p-2 flex right">
      <Switch
        checked={theme === 'dark'}
        onChange={() => theme === 'dark' ? setTheme('') : setTheme('dark')}
        className={`${theme === 'dark' ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Set theme</span>
        <span
          aria-hidden="true"
          className={`${theme === 'dark' ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ThemeToggler;
