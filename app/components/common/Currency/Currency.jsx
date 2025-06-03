import React from 'react';
import Image from 'next/image';

const Currency = ({ src, isLarge = false }) => {
  return (
    <div className={`relative ${isLarge ? 'w-24 h-24' : 'w-12 h-12'} transition-transform duration-300 hover:scale-110`}>
      <Image
        src={`/assets/${src}`}
        alt="Currency Icon"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Currency; 