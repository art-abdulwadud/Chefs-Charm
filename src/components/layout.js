import * as React from 'react';
import 'animate.css/animate.min.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Layout;
