import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl focus:ring-primary-500 border border-primary-500/20',
    secondary: 'bg-white text-dark-900 hover:bg-gray-100 focus:ring-gray-500 shadow-lg hover:shadow-xl border border-gray-200',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 focus:ring-primary-500 backdrop-blur-sm',
    ghost: 'text-primary-400 hover:bg-primary-500/10 focus:ring-primary-500',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 shadow-lg hover:shadow-xl focus:ring-accent-500 border border-accent-500/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
