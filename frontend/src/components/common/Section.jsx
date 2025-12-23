import React from 'react';
import Container from './Container';

const Section = ({
  children,
  className = '',
  bg = 'white',
  padding = 'normal',
  container = true,
}) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-dark-900 text-white',
    gradient: 'bg-gradient-professional text-white relative overflow-hidden',
  };

  const paddings = {
    none: '',
    small: 'py-8 md:py-12',
    normal: 'py-12 md:py-20',
    large: 'py-16 md:py-28',
  };

  const content = container ? <Container>{children}</Container> : children;

  return (
    <section className={`${bgColors[bg]} ${paddings[padding]} ${className}`}>
      {content}
    </section>
  );
};

export default Section;
