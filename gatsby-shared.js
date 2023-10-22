import React from 'react';
import { Provider } from 'jotai';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      {element}
    </Provider>
  );
};
