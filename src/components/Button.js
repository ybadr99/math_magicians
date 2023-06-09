import React from 'react';

const Button = ({ className = '', children, onClick }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default Button;
