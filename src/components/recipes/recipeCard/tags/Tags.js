import React from 'react';
import Tag from './Tag';

const Tags = () => {
  return (
    <ul className="relative list-none flex flex-nowrap overflow-x-auto space-x-2 md:justify-center py-2 mt-2 z-10" style={{ maxWidth: '100%' }}>
      <Tag label="brunch" delay={0} />
      <Tag label="breakfast" delay={1} />
      <Tag label="under_30_minutes" delay={2} />
      <Tag label="mothers_day" delay={3} />
      <Tag label="valentines_day" delay={4} />
      <Tag label="comfort_food" delay={5} />
    </ul>
  );
};

export default Tags;
