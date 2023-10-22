import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css/animate.min.css';
import './layout.css';
import './fonts.css';
import NavBar from './navbar/NavBar';

export const queryClient = new QueryClient();
export const isBrowser = typeof window !== 'undefined';
// A global state for identifying the current page
export const pageAtom = atom(() => isBrowser ? window.location.pathname : '');
// A global state for identifying the theme selected by the user
// Initially, its value is determined by darkMode item in localStorage
export const darkModeAtom = atom(isBrowser && window.localStorage.getItem('darkMode')?.toString() === 'true');

const Layout = ({ children }) => {
  const [darkMode] = useAtom(darkModeAtom);
  useEffect(() => {
    // update the value of darkMode item in localStorage
    // every time the user selects a different theme
    if (isBrowser) window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`relative h-100vh z-10 ${darkMode ? 'dark' : ''}`}>
        <div className="absolute h-100vh w-100 pattern-bg bg-white dark:bg-gray-800 bg-pattern-light dark:bg-pattern-dark dark z-0" />
        <NavBar />
        {children}
      </main>
    </QueryClientProvider>
  );
};

export default Layout;
