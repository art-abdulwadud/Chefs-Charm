import React from 'react';
import Tag from './Tag';

const Tags = () => {
  return (
    <ul className="relative list-none flex flex-nowrap overflow-x-auto space-x-2 md:justify-center py-2 mt-2 z-10" style={{ maxWidth: '100%' }}>
      <Tag label="brunch" />
      <Tag label="breakfast" />
      <Tag label="under_30_minutes" />
      <Tag label="mothers_day" />
      <Tag label="valentines_day" />
      <Tag label="comfort_food" />
    </ul>
  );
};

export default Tags;
