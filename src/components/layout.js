import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css/animate.min.css';
import './layout.css';
import './fonts.css';
import NavBar from './navbar/NavBar';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 300000
    }
  }
});
export const isBrowser = typeof window !== 'undefined';

// A global state for identifying the theme selected by the user
// Initially, its value is determined by darkMode item in localStorage
export const darkModeAtom = atom(isBrowser && window.localStorage.getItem('darkMode')?.toString() === 'true');

// A global state for determining whether search is activated or not
export const searchingAtom = atom(false);

// A global state for storing search results
export const searchResultsAtom = atom(null);

// A global state for determining whether search is loading or not
export const searchLoadingAtom = atom(false);

const Layout = ({ children }) => {
  const [darkMode] = useAtom(darkModeAtom);
  const setPatterBgHeight = () => {
    // Set the height of content background to the height of content wrapper
    // since the content background has a position of absolute
    const height = document.querySelector('.content-wrapper')?.clientHeight;
    document.querySelector('.content-background')
      ? document.querySelector('.content-background').style.height = `${height}px`
      : null;
  };
  useEffect(() => {
    // Set the height after every second
    // This variable will be the interval id
    const patternHeightInterval = setInterval(setPatterBgHeight, 1000);
    // update the value of darkMode item in localStorage
    // every time the user selects a different theme
    if (isBrowser) window.localStorage.setItem('darkMode', darkMode);
    // clear interval during cleanup
    // to clean up effects from previous renders
    return () => clearInterval(patternHeightInterval);
  }, [darkMode]);
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`relative h-100vh z-10 ${darkMode ? 'dark' : ''} content-wrapper overflow-hidden`}>
        <div className="absolute content-background h-100vh w-100 pattern-bg bg-white dark:bg-gray-800 bg-pattern-light dark:bg-pattern-dark dark z-0 m-0" />
        <NavBar />
        {children}
      </main>
    </QueryClientProvider>
  );
};

export default Layout;
