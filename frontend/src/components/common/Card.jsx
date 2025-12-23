import React from 'react';

const Card = ({ children, className = '', hover = true, padding = true }) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg
        ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

export default Card;
