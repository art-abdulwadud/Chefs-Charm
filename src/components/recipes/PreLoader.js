import { useAtom } from 'jotai';
import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { darkModeAtom } from '../layout';

const PreLoader = () => {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <div className="relative flex center flex-col" style={{ minHeight: '50vh' }}>
      <img
        src="/logo-tp.png"
        alt="logo"
        style={{ height: '200px',
          width: '200px',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate' }}
        className="relative mb-2 animate__animated animate__bounce animate__slower"
      />
      <BarLoader
        className="animate__animated animate__fadeIn"
        cssOverride={{
          width: '200px',
          backgroundColor: '#Fbbf24',
          borderRadius: '10px'
        }}
        color={darkMode ? '#374151' : '#f9fafb'}
      />
      <span
        className="text-amber-400 animate__animated animate__flash animate__slower"
        style={{
          animationIterationCount: 'infinite',
          animationDirection: 'alternate'
        }}
      >
        Just a sec 😋
      </span>
    </div>
  );
};

export default PreLoader;
