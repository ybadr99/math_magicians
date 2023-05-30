import React from 'react';

const Button = ({ className = '', children }) => (
  <button className={className} type="button">
    {children}
  </button>
);

export default Button;
