import * as React from 'react';
import 'animate.css/animate.min.css';
import './layout.css';
import './fonts.css';
import NavBar from './navbar/NavBar';

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
