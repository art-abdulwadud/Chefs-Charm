import * as React from 'react';
import 'animate.css/animate.min.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Layout;
