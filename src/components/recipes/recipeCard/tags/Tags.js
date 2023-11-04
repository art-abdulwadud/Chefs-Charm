import React from 'react';
import Tag from './Tag';

const Tags = () => {
  return (
    <ul className="relative list-none flex center overflow-scroll scroll-m-1 stroke-amber-400 mx-2 p-2 mt-2 z-10" style={{ maxWidth: '100%' }}>
      <Tag label="under_30_minutes" />
    </ul>
  );
};

export default Tags;
