import React from 'react';
import { atom, Provider, useAtom } from 'jotai';
import 'animate.css/animate.min.css';
import './layout.css';
import './fonts.css';
import NavBar from './navbar/NavBar';

export const isBrowser = typeof window !== 'undefined';
export const pageAtom = atom(() => isBrowser ? window.location.pathname : '');
export const themeAtom = atom(isBrowser && window.localStorage.getItem('themeSelected') && window.localStorage.getItem('themeSelected') === 'dark' ? 'dark' : '');

const Layout = ({ children }) => {
  const [theme] = useAtom(themeAtom);
  return (
    <main className={`relative h-100vh z-10 ${theme}`}>
      <div className="absolute h-100vh w-100 pattern-bg bg-white dark:bg-gray-800 bg-pattern-light dark:bg-pattern-dark dark z-0" />
      <NavBar />
      {children}
    </main>
  );
};

export default ({ children }) => (
  <Provider>
    <Layout>
      {children}
    </Layout>
  </Provider>
);
