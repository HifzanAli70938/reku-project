import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-4 bg-[rgba(181,123,255,0.2)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)]
      text-white text-lg font-medium rounded-full shadow-[0_8px_32px_0_rgba(181,123,255,0.2)]
      hover:bg-[rgba(181,123,255,0.3)] transition-all duration-300
      ${className}`}
    >
      {text}
    </button>
  );
};

export default Button; 