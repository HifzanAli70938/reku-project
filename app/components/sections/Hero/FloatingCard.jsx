import React from 'react';
import Image from 'next/image';

const FloatingCard = ({
  imageSrc,
  name,
  stats,
  className = '',
  cursorPosition
}) => {
  return (
    <div className={`flex items-center bg-[rgba(255,255,255,0.05)] backdrop-blur-[8px] 
      rounded-2xl py-3 px-4 gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] ${className}`}>
      <div className="relative w-10 h-10">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-white">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-[#B57BFF]">{stats}</p>
      </div>
      {cursorPosition && (
        <div className={`absolute ${cursorPosition === 'left' ? '-left-5' : '-right-5'} top-1/2 -translate-y-1/2`}>
          <Image
            src="/assets/cursor.png"
            alt="Cursor"
            width={20}
            height={20}
            className="opacity-90"
          />
        </div>
      )}
    </div>
  );
};

export default FloatingCard; 