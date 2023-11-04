import React from 'react';
import Tag from './Tag';

const Tags = () => {
  return (
    <ul className="relative list-none flex center overflow-x-scroll gap-1 stroke-amber-400 py-2 mt-2 z-10" style={{ maxWidth: '100%' }}>
      <Tag label="under_30_minutes" />
      <Tag label="breakfast" />
      <Tag label="brunch" />
      <Tag label="mothers_day" />
      <Tag label="valentines_day" />
      <Tag label="comfort_food" />
    </ul>
  );
};

export default Tags;
